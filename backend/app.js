const express=require('express');

const app=express();
const cors=require('cors');
const v1routes=require('./routes/v1'); // v1 version of routes

require('./config/db');
const config=require('./config/index');
const golbalerrohandler = require('./middlewares/error');

app.use(cors());

app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use(config.prefix,v1routes);

console.log(config.prefix,config.port);

app.use(golbalerrohandler)

// app.get('/ping', (req, res) => {
//     res.send('pong');
//   });
  

module.exports=app;