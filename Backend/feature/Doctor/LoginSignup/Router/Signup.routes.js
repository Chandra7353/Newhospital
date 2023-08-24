
const express =require ("express");
const { doctorsignup, doctorlogin } = require("../Controller/Signup.controller");


let routes = express.Router();

routes.post('/adddoctor', doctorsignup)
routes.post('/login',doctorlogin )



module.exports = routes