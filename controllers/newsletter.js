const Newsletter = require('../models/newsletter');
const nodemailer = require('nodemailer');
const { validationResult } = require('express-validator');

exports.setNewsletter = (req,res) => {
    const errors = validationResult(req);

    if(!errors.isEmpty()){
        return res.status(422).json({
            message: errors.array()[0].msg
        });
    }

    Newsletter.findOne({ email: req.body.email })
    .exec((err, email) => {
        if(err) return res.status(404).json({ message: "Error Occured While Looking In Database!" })
        if(email) return res.status(400).json({ message: "You Are Already Subscribed!" })
    
        const _newsletter = new Newsletter(req.body);
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
              user: `${process.env.GMAIL_USER}`,
              pass: `${process.env.GMAIL_PASS}`
            }
          });
        _newsletter.save((err,data) => {
            if(err) return res.status(400).json({ message: "Something went wrong! Please Try again later!", error: err });
            if(data) { 
                transporter.sendMail({
                    from: 'markadgrafix@gmail.com',
                    to: data.email,
                    subject: 'Welcome Message From Mark Ad Grafix',
                    text: "Congratulations! You're Successfully Subscribed to Mark Ad Grafix Newsletter. You'll start receiving our newsletters very soon."
                  },function (errorMsg, info) {
                    if (errorMsg) {
                      console.log(errorMsg);
                      Mail.findOneAndDelete({ email: data.email })
                      return res.status(400).json({ message: errorMsg || "Something Went Wrong" })
                    } else {
                      console.log('Email sent: ' + info.response);
                      return res.status(201).json({ message: "Succesfully subscribed To Our Newsletter!", data: data })
                    }
                  });
                // return res.status(201).json({ message: "Subscribed Successfully! You'll soon start receiving updates!", data: data})
            }
        })
    
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