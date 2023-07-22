const express = require('express').Router();
const route = require('express').Router();
const { registerValidate, loginValidate } = require('./Validation');
const bcrypt = require('bcrypt');
const jwt = require("jsonwebtoken");



const userModule = require('./module');

//Register data into database
route.post("/register", async (req, res) => {

    const { error } = await registerValidate(req.body);
    if (error) return res.status(404).send(error.details[0].message); // validating register data

    const salt = await bcrypt.genSalt(10);
    const hashPass = await bcrypt.hash(req.body.password, salt); // creating hashpass for password field

    const emailExist = await userModule.findOne({email:req.body.email});
    if(emailExist) return res.status(404).send("Email already exist"); // checking email exist or nnot if exist then user should not register again



    const newUser = userModule({
        nm: req.body.nm,
        email: req.body.email,
        ph_no: req.body.ph_no,
        password:hashPass
    })
    try {
        const saveData = await newUser.save(); // save() is mongodb method used to save data into db.
        res.send(saveData);
    } catch (error) {
        console.log(error);
    }


})

// login 
route.post("/login",async (req,res)=>{
    const {error} = await loginValidate(req.body)
    if (error) return res.status(404).send(error.details[0].message) // validating for login

    // email validation 
    const userExist = await userModule.findOne({email:req.body.email})
    if(!userExist) return res.status(404).send("INVALID EMAIL ADDRESS..") // check email exist or not if exist then proceed

    const isPass = await bcrypt.compare(req.body.password, userExist.password)
    if(!isPass) return res.status(404).send("INVALID PASSWORD.."); // check password is correct

    // const token = jwt.sign({_id:userExist._id}, process.env.Tokent_secret) // creating token for authentication
    const token = jwt.sign({email:userExist.email}, process.env.Tokent_secret) // creating token for authentication
    res.header('auth-token',token).send(token) // sending token through header

    return res.status(200).send("LOGIN SUCCESSFUL..")



})


//show data
route.get("/showData", async (req, res) => {
    try {
        const showData = await userModule.find(); // find() is mongodb method to find all data
        res.send(showData);
    } catch (error) {
        console.log(error);
    }
})

//delete data
route.delete("/delete", async (req, res) => {
    let id = req.query.id;
    try {
        let del = await userModule.findByIdAndDelete(id); // findByIdAndDelete(id) is mongodb method to delete data
        res.send("Data Deleted Successfully");
    } catch (error) {
        console.log(error);
    }
})

//update data
route.post("/update", async (req, res) => {
    let _id = req.body._id;
    try {
        let upd = await userModule.findByIdAndUpdate(_id, req.body); //findByIdAndUpdate(_id, req.body) is mongodb method to update data
        res.send("Updated Successfully");
    } catch (error) {
        console.log(error);
    }
})

// show only one record
route.get("/showOne", async (req, res) => {
    const id = req.query.id;
    let showOneData = await userModule.findById(id); // finds only one record
    res.send(showOneData);
})

module.exports = route; // exporting route for further use

