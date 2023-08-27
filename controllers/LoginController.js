import {SignUpDetailService,GetAllSignUpDetail,SignInServices,GetSignInServices} from "../services/LoginServices.js";
//import {SignInDetailServices}  from "../services/SignInService";
//import {GetAllSignInServices} from  "../services/SignInService"



export  async function SignUpController(req,res){
    try{
        const data= await SignUpDetailService(req.body);
        return res.status(200).send(data);

    }
    catch(err){
        return res.status(500).message("error occuring in SignUpController",err);

    }
}

export  async function SignUpGetDetailsController(res,req){
    try{

        const data1 = await  GetAllSignUpDetail( );
        return res.status(200).send(data1);

    }
    catch(err){
        return res.status(500).send(err,"Error in while singUp controller ")

    }
}

export  async function SignInController (req,res){
    try{

        const data = await SignInServices (req.body);
        console.log(data);
        return res.status(200).send(data);
    }
    catch(err){
        console.log(err);
        return res.status(500).send({error:"error in sign details", message:err.message});

    }
}


export async function  SignInDetailController(req,res){
    try{
        const data2 = await GetSignInServices( );

        return res.status(200).send(data2);

    }
    catch(err){

        return res.status(500).send(err,"Error in while SignInGetall details controller")
    }
}




// export default async function SignInController(req,res){
//     try{
//         const data2 = await GetAllSignInServices(res.body);
//         return req.status(200).send(data2);

//     }
//     catch(err){

//         return req.status(500).send(err,"Error in while SignInGetall details controller")
//     }
// }

// export default async function SignInDetailController(req,res){
//     try{

//         const data3 = await SignInDetailServices(res.body);
//         return req.status(200).send(data3);
//     }
//     catch(err){
//         return req.status(500).message(err);

//     }
