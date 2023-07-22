const jwt = require("jsonwebtoken");

module.exports = (req, res, next) => {
    const token = req.header('auth-token');
    if (!token) return res.status(401).send("Access Denied..");

    try{
        const verified = jwt.verify(token, process.env.Tokent_secret);

        res.userExist = jwt.verified

        next();

    }catch(error){
        res.status(404).send("Invalid Token..");
    }

}