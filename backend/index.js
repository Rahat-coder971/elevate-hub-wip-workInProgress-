const app=require('./app');
const config=require('./config')

app.listen(config.port,()=>{
    console.log(typeof config.port);
    
    console.log(`server is running at port 5000`);
    
})