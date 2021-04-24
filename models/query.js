const mongoose = require('mongoose');

const QuerySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        maxlength: 40,
        trim: true
    },
    email: {
        type: String,
        required: true,
        trim: true
    },
    subject: {
        type: String,
        required: true,
        maxlength: 35,
        trim: true
    },
    phone: {
        type: String,
        trim: true
    },
    country: {
        type: String,
        trim: true
    },
    Interest: {
        type: String,
        trim: true
    },
    message: {
        type: String,
        required: true,
        trim: true,
        minlength: 20
    }
})

module.exports = mongoose.model("Query", QuerySchema);