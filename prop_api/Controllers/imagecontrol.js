const { default: mongoose } = require('mongoose');
const Image = require('../models/image');
const jwt = require('jsonwebtoken');

const upimage = async (req, res) => {
    const { base64 } = req.body;

    try {
        // Use await with Image.create
        const newImage = await Image.create({ image: base64 });

        // Send a success response with the created image document
        res.status(201).json({ status: 'success', data: newImage });
    } catch (error) {
        // Handle errors and send an error response
        console.error('Error uploading image:', error);
        res.status(500).json({ status: 'error', data: error.message });
    }
};

module.exports = { upimage };
