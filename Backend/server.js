let express =require('express');
<<<<<<< Updated upstream
const routes = require('./feature/Doctor/LoginSignup/Router/Signup.routes');
=======
const cors = require('cors');
const routes = require('./feature/Doctor/Router/Signup.routes');
>>>>>>> Stashed changes
require('dotenv').config();
require('./Config/DBConnection')

//application middleware
 let app =express();
// when we reaced data from mandatory it should be json formate
app.use(express.json())

//API for doctor module
app.use("/api/doctor", routes)

// if user enter wrong url on the given  this will execute
 app.use("*", (req, res, next)=>{
    res.status(404).json("Page n found")
 })

//Error handlin middleware
 app.use((err,req, res, next)=>{
    res.status(400).json({error:true, message:err.message,data:"error data"})
 })
//registor and creatation of port number
 app.listen(process.env.PORT, ()=>{
    console.log(`server running sucessfully ${process.env.PORT}`);
 })