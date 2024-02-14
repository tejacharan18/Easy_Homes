const mongoose = require('mongoose');

const postschema = new mongoose.Schema({
    owner_name: {
        type: String,
        required: true
    },
    prop_type:
    {
        type: String,
        required: true
    },
    sale_rental:
    {
        type: String,
        required: true
    },
    location:
    {
        type: String,
        required: true
    },
    price:
    {
        type:String,
        required:true
    },
    bed_rooms:
    {
        type:Number,
        required:true
    
    },
    house_area:
    {
        type:Number,
        required:true
    },
    pincode:
    {
        type:Number,
        required:true
    },
    email:
    {
        type:String,
        required:true
    },
    phone:
    {
        type:Number,
        require:true
    },
    defaultemail:
    {
        type:String
    },
    createdAt:
    {
        type:Date
    }

})
module.exports = mongoose.model('Post', postschema);

// way of export a model to use globally