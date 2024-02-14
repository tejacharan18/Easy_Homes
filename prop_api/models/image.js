const mongoose = require('mongoose');

const imageschema = new mongoose.Schema({
    image: {
        type: String,
        required: true
    }
})
module.exports = mongoose.model('Image', imageschema);

// way of export a model to use globally