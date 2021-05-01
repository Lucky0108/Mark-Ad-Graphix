const User = require('../models/user');
const { validationResult } = require("express-validator");
const expressJWT = require('express-jwt');
const jwt = require('jsonwebtoken');

exports.signup = (req,res) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(422).json({
        message: errors.array()[0].msg
      });
    }

    User.findOne({ email: req.body.email })
    .exec((err,user) => {
        if(err) return res.status(404).json({ message: "Something went wrong! Try Again Later!", error: err });
        if(user) return res.status(400).json({ message: "User already exists!" });

        const _user = new User(req.body);

        _user.save((err,data) => {
            if(err) return res.status(400).json({ message: "Failed To Save The User!", error: err })
            if(data) return res.status(201).json({ message: "User Successfully Created!", data: data })
        })

    })
}

exports.signin = (req,res) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(422).json({
        message: errors.array()[0].msg
      });
    }

    User.findOne({ email: req.body.email })
    .exec((err,user) => {
        if(err) return res.status(404).json({ message: "Something went wrong! Try Again Later!" });
        if(user){
            if(user.authenticate(req.body.password)){
                const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET_KEY, { expiresIn: '1d' }) 
                const { _id, firstName, lastName, email, phone } = user;
                res.cookie("token", token, { expires: new Date(Date.now() + 24 * 3600000) }) // Cookie expires after 24 hours 
                return res.status(200).json({ 
                    token: `Bearer ${token}`,
                    user: {
                        _id, firstName, lastName, email, phone
                } })
            } else {
                return res.status(400).json({ message: "Incorrect Password!"})
            }
        } else { 
            return res.status(404).json({ message: "No User Found!"}) 
        }
    })
}

exports.updateUser = (req,res) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(422).json({
        message: errors.array()[0].msg
      });
    }

    User.findByIdAndUpdate(req.body._id , {$set: req.body }, {new: true, useFindAndModify: false}, (err, user) => {
        if(err) return res.status(400).json({ message: "Failed To Update The User!", error: err })
        if(user) { 
            const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET_KEY, { expiresIn: '1d' }) 
            const { _id, firstName, lastName, email, phone } = user;
            res.cookie("token", token, { expires: 0 })
            return res.status(200).json({ message: "User Updated Successfully!", token: `Bearer ${token}`,
            user: {
                _id, firstName, lastName, email, phone
        } }) 
        }
    })
}

exports.signout = (req,res) => {
    res.clearCookie("token");
    res.status(200).json({ message: "Logout Success!" })
}


// Protected Route
exports.isSignedin = expressJWT ({
    secret: process.env.JWT_SECRET_KEY,
    userProperty: 'auth',
    algorithms: ['sha1', 'RS256', 'HS256'] 
});