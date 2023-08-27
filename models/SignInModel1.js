import mongoose from 'mongoose'

const SignIn = mongoose.Schema({

    Number:{
        type:Number,
        require:true
    },

    OTP:{
        type:Number,
        require:true
    }
},{timeStamps:true})

const SignInDetail = mongoose.model('SignIn',SignIn);
export {SignInDetail}