// module.exports=(Fnc)=async (req,res,next)=>{
//     try{
//         await Fnc(req,res,next)
//     }
//     catch(e){
//     next(e) // if any error occur at contoller will throw it to global error handler
//     }
// }


module.exports=(execution)=>(req,res,next)=>{
    console.log('handler');
    
    execution(req,res,next).catch(next)
}



  



