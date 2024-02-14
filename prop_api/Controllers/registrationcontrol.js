const { default: mongoose } = require('mongoose');
const Registration = require('../models/registration');

const createRegistration = async (req, res) => {

    try {
        const { name, email, phone, location, pincode, gender, password, confirmpassword } = req.body;
        const exist = await Registration.findOne({ email });
        if (exist) {
            return res.status(400).send('User Already Registered')
        }
        if (password != confirmpassword) {
            return res.status(403).send("Password doesn't match with Confirm password");
        }

        const registration = new Registration({
            name,
            email,
            phone,
            location,
            pincode,
            gender,
            password,
            confirmpassword
        })
        await registration.save()

        res.status(201).json(registration)
    }
    catch (error) {
        console.log("There Is An Error", error);
        res.status(500).json({ message: 'server error' })
    }
}




const singleUser = async (req, res) => {

    try {
        const user = await Registration.findById(req.user.id)
        if (!user) {
            return res.status(404).json({ message: "Employee not found" })
        }
        res.status(200).json(user)
    }
    catch (error) {

        console.error("There is An error", error)
        res.status(500).json({ message: 'server error' })
    }
}

//update
const updateUser = async (req, res) => {

    try {
        const { name,
            email,
            phone,
            location,
            pincode,
            gender,
            password,
            confirmpassword } = req.body
        const myUser = await Registration.findByIdAndUpdate(req.user.id, {
            name,
            email,
            phone,
            location,
            pincode,
            gender,
            password,
            confirmpassword
        })
        if (!myUser) {
            return res.status(404).json({ message: "emoloyee not found" })
        }
    }
    catch (error) {
        console.error("There Is An Error", error);

        res.status(500).json({ message: "Server Error" })
    }

}



const update = async (req, res) => {
    try {
        const { name, email, phone, location, pincode, gender, password, confirmpassword } = req.body;

        // Check if the user exists
        const existingUser = await Registration.findById(req.user.id);
        // Update user fields
        existingUser.name = name;
        existingUser.email = email;
        existingUser.phone = phone;
        existingUser.location = location;
        existingUser.pincode = pincode;
        existingUser.gender = gender;

        // Check if the password needs to be updated
        if (password && confirmpassword) {
            // Check if passwords match
            if (password !== confirmpassword) {
                return res.status(403).send("Password doesn't match with Confirm password");
            }
            existingUser.password = password;
            existingUser.confirmpassword = confirmpassword;
        }

        // Save the updated user
        await existingUser.save();

        // Respond with the updated user
        res.status(200).json(existingUser);
    } catch (error) {
        console.error("There Is An Error", error);
        res.status(500).json({ message: "Server Error" });
    }
}

const deleteUser = async (req, res) => {

    try {
        const deleteuser = await Registration.findByIdAndDelete(req.params.id)
        if (!deleteuser) {
            return res.status(404).json({ message: "Employee not found" })
        }
        else {
            res.status(204).json({ message: "Deleted Success fully" })
        }
    }
    catch (error) {
        console.error("There Is An Error", error);

        res.status(500).json({ message: "Server Error" })
    }
}
module.exports = { createRegistration, update, singleUser, deleteUser }