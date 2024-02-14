const { default: mongoose } = require('mongoose');
const Registration = require('../models/registration');
const jwt = require('jsonwebtoken');
const login = async (req, res) => {
    try {
        const { email, password } = req.body;
        const exist = await Registration.findOne({ email });
        if (!exist) {
            return res.status(400).send('User not Registered');
        }
        if (exist.password != password) {
            return res.status(400).send('Password Invalid');
        }
        let payload = {
            user: {
                id: exist.id,
                defaultemail: exist.email
            }

        }
        jwt.sign(payload, 'jwtPassword', { expiresIn: 3000000 },
            (error, token) => {
                if (error) {
                    throw (error)
                }
                return res.json({ token, id: exist.id, email: exist.email })
            }
        )

    }
    catch (error) {
        console.log("There Is An Error", error);
        res.status(500).json({ message: 'server error' })
    }
}


module.exports = { login }