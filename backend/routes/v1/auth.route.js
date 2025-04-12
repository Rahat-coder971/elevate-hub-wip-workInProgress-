const express=require('express');
const router=express.Router();
const asynchandler=require('../../helper/asynchandler.for.controller')
const auth=require('../../controllers/auth.contoller')
const validate =require('../../middlewares/joiSchemaValidation')
const {signupjoiSchema} =require('../../validation/auth.validation')

router.post('/signup',validate(signupjoiSchema),asynchandler(auth.signup))   // intead of writing try catch for each controller we will using as helper asynchandler 




module.exports=router


