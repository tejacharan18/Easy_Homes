const { default: mongoose } = require('mongoose');
const Post = require('../models/post');

const createpost = async (req, res) => {

    try {
        const {owner_name,prop_type,sale_rental,location,price,bed_rooms,house_area,pincode,email,phone,defaultemail } = req.body;
        const createdAt=Date.now();
        const post = new Post({
            owner_name,
            prop_type,
            sale_rental,
            location,
            price,
            bed_rooms,
            house_area,
            pincode,
            email,
            phone,
            defaultemail,
            createdAt
        })
        await post.save()

        res.status(201).json(post)
    }
    catch (error) {
        console.log("There Is An Error", error);
        res.status(500).json({ message: 'server error' })
    }
}


const getposts = async (req, res) => {

    try {
        const users = await Post.find();
        return res.json(users);
    }
    catch (error) {
        console.log('There is an Error', error);
        res.status(500).json({ message: "server error" })

    }
}

const myposts = async (req, res) => {
    const { defaultemail } = req.query;
    try {
        const posts = await Post.find({defaultemail})        
        res.status(200).json(posts)
    }
    catch (error) {

        console.error("There is An error", error)
        res.status(500).json({ message: 'server error' })
    }
}


const deletePost = async (req, res) => {
    const postId = req.params.id;

    try {
        const deletedPost = await Post.findByIdAndDelete(postId);
        if (!deletedPost) {
            return res.status(404).json({ message: 'Post not found' });
        }
        res.status(204).json({ message: 'Post deleted successfully' });
    } catch (error) {
        console.error('There is an error', error);
        res.status(500).json({ message: 'Server error' });
    }
};

const filtposts = async (req, res) => {
    const {location} = req.query
    try {
        const filtered = await Post.find({location});
        return res.json(filtered);
        res.status(200).json(filtered)
    }
    catch (error) {
        console.log('There is an Error', error);
        res.status(500).json({ message: "server error" })

    }
}
const sendemail =  (req, res) => {
   
    const { senderEmail, recipientEmail, subject, message } = req.body;

 
    let transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'coder20041601@gmail.com', // Your Gmail address
            pass: 'Coder@20041691#' // Your Gmail password
        }
    });

    // Define email options
    let mailOptions = {
        from: senderEmail,
        to: recipientEmail,
        subject: subject,
        text: message
    };

    // Send the email
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.error('Error sending email:', error);
            res.status(500).json({ message: 'Error sending email' });
        } else {
            console.log('Email sent:', info.response);
            res.status(200).json({ message: 'Email sent successfully' });
        }
    });
};


module.exports = {createpost,getposts,filtposts,myposts,deletePost,sendemail }