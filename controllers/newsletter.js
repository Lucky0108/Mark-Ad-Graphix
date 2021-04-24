const Newsletter = require('../models/newsletter');
const { validationResult } = require('express-validator');

exports.setNewsletter = (req,res) => {
    const errors = validationResult(req);

    if(!errors.isEmpty()){
        return res.status(422).json({
            message: errors.array()[0].msg
        });
    }

    const _newsletter = new Newsletter(req.body);
    _newsletter.save((err,data) => {
        if(err) return res.status(400).json({ message: "Something went wrong! Please Try again later!", error: err });
        if(data) return res.status(201).json({ message: "Subscribed Successfully! You'll soon start receiving updates!", data: data})
    })
}

exports.getNewsletter = (req,res) => {
    const errors = validationResult(req);

    if(!errors.isEmpty()){
        return res.status(422).json({
            message: errors.array()[0].msg
        });
    }

    Newsletter.find({})
    .exec((err,data) => {
        if(err) return res.status(400).json({ message: "Something went wrong!", error: err})
        if(data) return res.status(200).json({ mails: data.map((mail) => {return mail.email}) })
    })
}