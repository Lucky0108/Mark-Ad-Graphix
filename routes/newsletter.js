const express = require('express');
const router = express.Router();
const { check } = require('express-validator');
const { isSignedin } = require('../controllers/auth');
const { setNewsletter, getNewsletter } = require('../controllers/newsletter');

router.post('/newsletter',[
    check("email","Enter A Valid Email Address!").isEmail()
], setNewsletter)

router.get('/getNewsletter', isSignedin, getNewsletter);

module.exports = router;