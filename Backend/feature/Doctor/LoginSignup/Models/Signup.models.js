const{Schema, model} = require('mongoose')

const doctorsignup = new Schema({
  name:{
    type:String,
    required:[true, "name is mandatory"]
  },
    
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    }

    
  

},
{timestamps:true}

)

module.exports=new model("doctor", doctorsignup)