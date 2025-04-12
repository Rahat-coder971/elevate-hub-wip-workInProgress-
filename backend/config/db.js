const mongoose=require('mongoose');
const config=require('.') // insted of require('./index') this will also work

mongoose.set('strictQuery',true);

mongoose.connect(config.db_url).then(()=>{
    console.log("connection established");
    
}).catch((err)=>{
    console.log('connection not established due to this error'+err);
    
});

// to track the real time information about db connection
mongoose.connection.on('connected',()=>{
    console.log("connection is open with"+config.db_url);
    
});

mongoose.connection.on('disconnected',()=>{
    console.log("connection disconnected with data base");
    
})

mongoose.connection.on('error',(err)=>{
    console.log('error occured'+ err);
    
})

process.on("SIGINT",()=>{
    process.exit(0);
});


module.exports=mongoose.connection;