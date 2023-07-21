//Creating schema for registration in database

const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({
    nm:{
        type : String,
        required : true
    },
    email:{
        type : String,
        required : true
    },
    ph_no:{
        type : Number,
        required : true
    },
    password:{
        type : String,
        required : true
    },
    date:{
        type : Date,
        default : Date.now()
    }
    
})
module.exports = mongoose.model("userInfo",userSchema);