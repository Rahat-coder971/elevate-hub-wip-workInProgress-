const usermodel =require('../models/user.model')


const createuser= async (data)=>{
    
return await usermodel.create(data)
}

const userexits = async (email, username) => {
    return await usermodel.findOne({
      $or: [{ email }, { username }], // will check for both
    });
  };
module.exports={createuser,userexits};