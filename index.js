//------------------Imports module from 'package.json'--------------------X
require('dotenv').config();
const express = require('express'); //Used to create node apps
const app = express(); //Can used as creating routes
//-----------------Inbuilt modules
const path = require('path');

const ejs = require('ejs'); //Can used as templates engine
const expressLayouts = require('express-ejs-layouts');

//-------------Require the routes and its types
const Web = require('./routes/web');

//---------Define the form 'encoded' stuff--------------X
app.use(express.static('public'))
app.use(express.json());
app.use(express.urlencoded({extended:false}));

//------------------Path Specific Stuff----------------------X
const viewsPath = path.join(__dirname,'./templates/views');

//-------------EJS Specific Stuff--------------------X
app.set('view engine','ejs');
app.use(expressLayouts);
app.set('views',viewsPath);

//---------------------Routes/EndPoints Specific Stuff--------------X
app.use('/',Web); //All pages which are related our app

//--------------Define the variables from '.env'-----------------X
const PORT = process.env.PORT;
const URL = process.env.URL;

//------------------Listen to the server--------------X
app.listen(PORT,()=> console.log(`Application listen at ${URL}:${PORT}`));