
const ApiError = require('../helper/costumapierror');
const userServices=require('../services/auth.services')
const  httpstatus =require('../utils/https.status') 


const signup=async (req,res,next)=>{
const userdata=req.body;

console.log('your are in controller');
   
const userexits=await userServices.userexits(userdata.email,userdata.username);

if(userexits){
  if (userexits) {
    return next(new ApiError(httpstatus.forbidden, 'user already exists with email'));
  }
  
}
  const user= await userServices.createuser(userdata) 

 
 

  res.status(httpstatus.created).json({
    message:"Account created successfully really",
    userdata,
    sucess:'true'
})
}

const signin=(req,res)=>{

}
module.exports={signup,signin}
