const Query = require('../models/query');
const { validationResult } = require("express-validator");

exports.setQuery = (req,res) =>{
    const errors = validationResult(req);

    if(!errors.isEmpty()) {
      return res.status(422).json({
       message: errors.array()[0].msg
      });
    }

    const _query = new Query(req.body);
    _query.save((err,data) => {
        if(err) return res.status(400).json({ message: "Failed To Send Data! Try Again Later!", error: err })
        if(data) return res.status(201).json({ message: "Query registered succesfully! We'll contact you at the earliest!", data: data })
    })
}

exports.getQuery = (req,res) => {
    Query.find({})
    .exec((err,data) => {
        if(err) return res.status(400).json({ message: "Failed To Get Data From Database!", error: err })
        if(data) return res.status(200).json({ queries: data })
    })
}