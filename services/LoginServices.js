
import jwt from 'jsonwebtoken';
import { LoginModal } from '../models/LoginModal.js';


const secretKey = "dsajhbbmbc79^%&^%*(()$#@GHGJJK(*#E@RFG()JJVCFVHUIU";

export  async function SignUpDetailService(detail){
    const data=[];
    data.push(detail);

    return await LoginModal.insertMany(detail);
}


export  async function GetAllSignUpDetail(){


    return await LoginModal.find({ });
}



export async function SignInServices(detail ){
    const Number = detail.Number;
    const document  = await LoginModal.findOne({Number:Number});

    if(!document){
        return {status:400,message:"does not match Register mobile number"};

    }
   // return{ status:"sucess" ,message:" user login sucessfully"}



    const token = jwt.sign({
        Number:Number,
        OTP:document.OTP
    },

    secretKey,
    {expiresIn:"24h"}
    )

    const datasend={
        Object_Id:document._id,
        Name:document.Name,
        Number:document.Number,
        token:token
    }
    return{status:"sucess",send:datasend}
}


export async function GetSignInServices(){

    return  await LoginModal.find({ })

}