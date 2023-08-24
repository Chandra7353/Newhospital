const Doctor =require('../Models/Signup.models');
const  {SignupInvationmail, sendotp}=require('../Service/signup.mail')
const bcryptjs=require('bcryptjs');
const { otpcreate } = require('../Service/signup.otp');


//doctor signup logic 
let doctorsignup = async (req, res,next)=>{
try{

    let {name, email, password}=req.body;

    let isDoctor = await  Doctor.findOne({email})
 
    if(!isDoctor){
        
        
      
        let createDoctor = await Doctor.create({name,email, password})
        SignupInvationmail(email, name)
       
         
       return  res.status(201).json({error:false, message:"doctor created sucessfully", data: {name:createDoctor.name,age:createDoctor.age,email:createDoctor.email}})
    }
    return res.status(404).json({error:true, message:"doctor already exists"})

}
catch(err){
    next(err)
}

}

//doctor login logic
let doctorlogin = async (req,res,next)=>{

    
    try{

        let { email, password}=req.body;

        let isavailable = await Doctor.findOne({email})

        if( !isavailable){

            return res.status(300).json({error:true, message:"Given email id not found any Doctor", data:null})
        }

      
        if(password == isavailable.password){
            
       // OTP sending 
            let {hashotp,otp} = await otpcreate();

            let user = await Doctor.findOneAndUpdate({email},
                {hashotp}, {new:true, runValidators:true})
               sendotp(email, otp, user.name)

            return res.status(201).json({error:false, message:"Doctor login sucessfuly", data:isavailable.email})
        }
        else{
            return res.status(401).json({error:true, message:"invalied password" })
        }

       

    }
    catch(err){
        next(err)  
    }

}

module.exports={
    doctorsignup,
    doctorlogin
}