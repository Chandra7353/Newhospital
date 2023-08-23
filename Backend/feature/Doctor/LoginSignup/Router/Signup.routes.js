
const express =require ("express");
const { doctorsignup, doctorlogin } = require("../Controller/Signup.controller");

let routes = express.Router();

routes.post('/adddoctor', doctorsignup)
routes.get('/login',doctorlogin )


module.exports = routes