const mongoose = require('mongoose');

//Define the variables/import from .env
const server = process.env.DB_SERVER;
const host = process.env.DB_HOST;
const port = process.env.DB_PORT;
const db_name = process.env.DB_NAME;

//Connection to the database
mongoose.connect(`${host}://${server}:${port}/${db_name}`,{useNewUrlParser:true,useUnifiedTopology:true}).
then(()=>{console.log('Connection to database')}). 
catch((e)=>{console.log(`Error occured during connect to database ${e}`)});