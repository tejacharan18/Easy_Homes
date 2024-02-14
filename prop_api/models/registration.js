const mongoose=require('mongoose');

const registrationschema = new mongoose.Schema({

    //name, email,phone,city
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    phone:{
        type:Number,
        required:true //i.e not a required field ,no need to write this statement
    },
    location:{
        type:String,
    },
    pincode:
    {
        type:Number,
        required:true
    },
    gender:
    {
        type:String,
        required:true
    },
    password:
    {
        type:String,
        required:true
    },
    confirmpassword:
    {
        type:String,
        required:true
    }
})
module.exports=mongoose.model('Registration',registrationschema);

// way of export a model to use globally