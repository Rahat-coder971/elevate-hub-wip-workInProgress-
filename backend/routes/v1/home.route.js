const express=require('express');
const router=express.Router();

router.get('/',(req,res)=>{

    res.json({
        message:'data from server'
    })
})

module.exports=router;