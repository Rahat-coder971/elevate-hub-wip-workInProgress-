// for global error handler

const golbalerrohandler=(error,req,res,next)=>{
    console.log('global error handler executed');
    
const statusCode=error.statusCode || 500;
const messages=error.message || 'something went wrong'

res.status(statusCode).json({
    message:messages,
    sucess:'false'              
})
}

module.exports=golbalerrohandler;