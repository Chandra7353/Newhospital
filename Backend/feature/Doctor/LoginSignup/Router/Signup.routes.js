
const express =require ("express");
const { doctorsignup, doctorlogin, getalldocotr } = require("../Controller/Signup.controller");


let routes = express.Router();

routes.post('/adddoctor', doctorsignup)
routes.post('/login',doctorlogin )
routes.get('/getalldoctor', getalldocotr)



module.exports = routes