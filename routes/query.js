const express = require('express');
const router = express.Router();
const { check, body } = require('express-validator');
const { isSignedin } = require('../controllers/auth');
const { setQuery, getQuery, removeQuery } = require('../controllers/query');

router.post('/create/query',[
    check("name","Name should have atleast 2 characters").isLength({ min:3 }),
    check("email","Please Enter A Valid Email").isEmail(),
    check("subject", "Please Enter A Valid Subject (More Than 5 characters) ").isLength({ min: 5 }),
    check("phone","Please Enter a valid contact number or leave it blank").if(body('phone').notEmpty()).isMobilePhone(),
    check("message","Please describe your message in atleast 30 characters").isLength({ min:30 })
], setQuery)

router.get('/getquery', isSignedin, getQuery);

router.delete('/removequery', isSignedin,removeQuery);

module.exports = router;