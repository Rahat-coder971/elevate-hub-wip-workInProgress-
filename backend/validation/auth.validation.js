const joi=require('joi');

const signupjoiSchema=joi.object().keys({
    name:joi.string().required().trim(),
    username:joi.string().required().trim(),
    email:joi.string().required().trim(),
    password:joi.string().required().min(8),
    role:joi.string().valid("mentor","student").required(),
    
})

module.exports={signupjoiSchema};



