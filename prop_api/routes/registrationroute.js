const express=require('express');
const router =express .Router();
const registrationcontroller=require("../Controllers/registrationcontrol")
const Registration =require("../models/registration");
const logincontroller=require("../Controllers/logincontrol");
const middleware = require("../middleware");

router.post('/register',registrationcontroller.createRegistration);
router.post('/update',registrationcontroller.update);
// router.get('/all',registrationcontroller.getUser);
router.get('/reg',middleware,registrationcontroller.singleUser);


// router.post('/login',logincontroller.login);
// router.put('/update/:id',middleware,registrationcontroller.updateEmployee);
router.delete('/delete/:id',registrationcontroller.deleteUser)
module.exports=router;