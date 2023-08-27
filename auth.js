import jwt from 'jsonwebtoken';

export function Authentication (error,request,response,next){
    try{
        const secretKey = "dsajhbbmbc79^%&^%*(()$#@GHGJJK(*#E@RFG()JJVCFVHUIU";

        const token = request.headers.AuthoriZation;

        const IsVerfired = jwt.verify(token,secretKey);

    console.log("token is verfired");
    response.status(200).send(IsVerfired);

    next()


    }
    catch(err){
        return response.status(500).send("Error in Authentication ")

    }
}

