const jwt = require('jsonwebtoken');
module.exports = function (req, res, next) {
    try {
        let verifytoken =req.header('token');
        if(!verifytoken)
        {
            return res.status(400).send("Token not found");
        }
        let decode = jwt.verify(verifytoken,'jwtPassword');
        req.user = decode.user
        next();
    }
    catch (error) {
        console.log(error);
        return res.status(400).send("Authentication Error");
    }
}