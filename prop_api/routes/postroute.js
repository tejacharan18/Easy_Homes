const express=require('express');
const router =express .Router();
const postcontroller=require("../Controllers/postcontrol")
const Post =require("../models/post");
const middleware= require("../middleware");
const img=require("../Controllers/imagecontrol");


router.post('/post',postcontroller.createpost);
router.get('/allposts',middleware,postcontroller.getposts)
router.get('/filter',postcontroller.filtposts)
router.get('/myposts',postcontroller.myposts)
router.delete('/deletepost/:id', postcontroller.deletePost);
router.delete('/sendemail', postcontroller.sendemail);


// router.get('/all',registrationcontroller.getUser);
// router.get('/register/:id',registrationcontroller.singleUser);
router.post('/hee',img.upimage);


// router.post('/login',logincontroller.login);
// router.put('/update/:id',employeecontroller.updateEmployee);
// router.delete('/delete/:id',employeecontroller.deleteEmployee)
module.exports=router;