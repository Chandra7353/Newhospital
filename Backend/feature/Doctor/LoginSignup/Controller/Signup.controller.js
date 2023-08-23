const Doctor =require('../../Models/Signup.models')

let doctorsignup = async (req, res,next)=>{
try{

    let {name, email, password}=req.body;

    let isDoctor = await  Doctor.find({email})

    if(isDoctor){

        let createDoctor = await Doctor.create({name,email, password})

       return  res.status(201).json({error:false, message:"doctor created sucessfully", data: {name:createDoctor.name,age:createDoctor.age,email:createDoctor.email}})
    }
    res.status(404).json({error:true, message:"doctor already exists"})

}
catch(err){
    next(err)
}

}


let doctorlogin = async (req,res,next)=>{

    try{

        let { email, password}=req.body;

        let isavailable = await Doctor.find({email,password})

        if( !isavailable){

            return res.status(300).json({error:true, message:"Given email id not found any Doctor", data:null})

        }

        return res.status(201).json({error:false, message:"Doctor login sucessfuly", data:isavailable})

    }
    catch(err){
        next(err)
    }

}

module.exports={
    doctorsignup,
    doctorlogin
}