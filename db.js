const { MongoClient } = require('mongodb');

// const uri = process.env.DB_URI; //Our database uri to connecting database

// const client = new MongoClient(uri);

// async function main() {
//     // Use connect method to connect to the server
//     await client.connect();
// }

// main()
//     .then(() => console.log('Connected successfully to server'))
//     .catch((err) => console.log('Error occured during connect database ', err))
//     .finally(() => client.close());

const mongoose = require('mongoose');

const uri = process.env.DB_URI 
 
mongoose.connect(uri,{
    useNewUrlParser : true,useUnifiedTopology:true
}).then(()=>console.info('Connectin to database successfully'))
.catch((err)=>console.error(err))