const express=require('express');
const router =express .Router();
const Registration =require("../models/registration");
const logincontroller=require("../Controllers/logincontrol");
router.post('/login',logincontroller.login);
module.exports=router;