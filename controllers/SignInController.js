//import { SignInServices,GetSignInServices } from "../services/SignInService.js";




export  async function SignInController (req,res){
    try{

        const data = await SignInServices (req.BODY);
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

