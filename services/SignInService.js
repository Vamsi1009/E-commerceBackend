//import { SignInDetail } from '../models/SignInModel1.js';
import jwt from 'jsonwebtoken';


const secretKey = "dsajhbbmbc79^%&^%*(()$#@GHGJJK(*#E@RFG()JJVCFVHUIU";



export async function SignInServices(detail ){
    const Number = detail.Number;
    const document  = await SignInDetail.findOne({Number:Number});

    if(!document){
        return {status:400,message:"does not match Register mobile number"};

    }
    return{ status:"sucess" ,message:" user login sucessfully"}



    const token = jwt.sign({
        Number:Number,
        OTP:document.OTP,
        
        userId:document._id
    },

    secretKey,
    {expiresIn:"24h"}
    )

    const datasend={
        Name:document.Name,
        Number:document.Number,
        token:token
    }
    return{status:"sucess",message:datasend}
}


export async function GetSignInServices(){

    return  await SignInDetail.find({ })

}