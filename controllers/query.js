const Query = require('../models/query');
const nodemailer = require('nodemailer');
const { validationResult } = require("express-validator");

exports.setQuery = (req,res) =>{
    const errors = validationResult(req);

    if(!errors.isEmpty()) {
      return res.status(422).json({
       message: errors.array()[0].msg
      });
    }

    const _query = new Query(req.body);
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: `${process.env.GMAIL_USER}`,
          pass: `${process.env.GMAIL_PASS}`
        }
      });
    _query.save((err,data) => {
        if(err) return res.status(400).json({ message: "Failed To Send Data! Try Again Later!", error: err })
        if(data) {
            transporter.sendMail({
                to: 'yadavlakshay76@gmail.com',
                subject: 'New Query',
                html: `Name: ${data.name} <br>Email: ${data.email} <br>Subject: ${data.subject} <br>Phone: ${data.phone} <br>Country: ${data.country} <br>Interest: ${data.Interest} <br>Message: ${data.message}`
            }, function (errorMsg, info) {
                if (errorMsg) {
                  console.log(errorMsg);
                  return res.status(400).json({ message: errorMsg })
                } else {
                  console.log('Email sent: ' + info.response);
                  return res.status(201).json({ message:"Query registered succesfully! We'll contact you at the earliest!", data: data })
                }
            });
        }
    })
}

exports.getQuery = (req,res) => {
    Query.find({})
    .exec((err,data) => {
        if(err) return res.status(400).json({ message: "Failed To Get Data From Database!", error: err })
        if(data) return res.status(200).json({ queries: data })
    })
}

exports.removeQuery = (req,res) => {
    Query.findByIdAndDelete(req.body._id, ((err, data) => {
        if(err) return res.status(400).json({ message: "Failed To Remove The Query!", error: err })
        if(data) return res.status(200).json({ message: "Succesfully Removed The Query!" })
    }))
}