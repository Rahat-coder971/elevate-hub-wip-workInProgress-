require('dotenv').config();
module.exports={
 db_url:process.env.mongo_url,
 port:process.env.port,
 prefix:process.env.prefix || '/v1'
}