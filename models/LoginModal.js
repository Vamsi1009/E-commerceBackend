import mongoose from "mongoose";

const Login = mongoose.Schema({
    Name:{
        type:String,
        require:true
    },
    Number:{
        type:Number,
        require:true
    },
    OTP:{
        type:Number,
        require:true
    }
    
},{timeStamps:true});
const LoginModal = mongoose.model("Login",Login);

export{LoginModal}