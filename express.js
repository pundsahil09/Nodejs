const express = require('express');
const app = express();
const mongoose = require('mongoose');
const route = require('./Route');
const env = require("dotenv");
const jwt = require("jsonwebtoken");

/* app.get("/",(req,resp)=>{
    resp.send("Hello and welcome to explress tutorial. GET request");
})

app.post("/",(req,resp)=>{
    resp.send("hello this is express post request");
})
*/

env.config();
app.use(express.json()); // tell express use json format
app.use("/user",route); // here user is middleware
mongoose.set('strictQuery', true); // to avoid warning

mongoose.connect(process.env.DB_connect) // mongodb connection
    .then((data) => {
        console.log("Connection created");
    }).catch((error) => {
        console.log(` There is some error : ${error}`);
    })


app.listen(4000); // server localhost:4000