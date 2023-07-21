const joi = require("joi"); // joi package is used to validate data

const registerValidate=(data)=>{
    let Schema = joi.object({
        nm:joi.string().required().min(2),
        email:joi.string().email().required(),
        ph_no:joi.number().integer().min(1000000000).max(9999999999).required(),
        password:joi.string().required().min(5).max(10)
    }) 
    return Schema.validate(data)
} // this function validate register data

const loginValidate=(data)=>{
    let Schema = joi.object({
        email:joi.string().email().required(),
        password:joi.string().required().min(5).max(10)
    })
    return Schema.validate(data)
} // this function validate login data
module.exports.registerValidate = registerValidate;
module.exports.loginValidate = loginValidate;