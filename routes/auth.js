const express = require('express');
const { check, body } = require('express-validator');
const { signup, signout, signin, updateUser } = require('../controllers/auth');
const router = express.Router();

router.post('/admin/signup',[
    check("firstName","Name should be atleast 3 characters").isLength({ min:3 }),
    check("email", "Valid Email is required").isEmail(),
    check("phone","Contact should be a valid number").if(body('phone').exists()).isMobilePhone(),
    check("password", "Password should be atleast 3 Characters").isLength({ min:3 })
], signup);

router.post('/admin/signin',[
    check("email", "Valid Email Address is required").isEmail(),
    check("password","Password should be at least 3 characters").isLength({ min:3 })
],signin)

router.put('/admin/update', [
    check("firstName","Name should be atleast 3 characters").isLength({ min:3 }),
    check("phone","Contact should be a valid number").if(body('phone').exists()).isMobilePhone(),
    check("password", "Password should be atleast 3 Characters").if(body('password').notEmpty()).isLength({ min:3 })
], updateUser)

router.post('/admin/logout', signout);

module.exports = router;