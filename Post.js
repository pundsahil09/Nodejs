// This file is created to verify token
const route = require("express").Router();
const verify = require("./verifytoken")

route.get("/",verify, (req, res)=>{
    res.json({
        post:{
            "title" : "Token",
            "description" : " 1st token "
        }
    })
})
module.exports = route;