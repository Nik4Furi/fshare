//------------------Imports module from 'package.json'--------------------X
require('dotenv').config()
require('./db')

// require('./db') //Connect to database
const express = require('express') //Used to create node apps
const app = express() //Can used as creating routes

//-----------------Inbuilt modules
const path = require('path');

//---------Define the form 'encoded' stuff--------------X
app.use(express.static('public'))
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//--------------------Check the version of the app, from '.env'--------X
if (process.env.VERSION == 'v1') {
    //Define the variables/import from .env
    const uri = process.env.DB_URI;

    const session = require('express-session') //Session can used identify all users
    const flash = require('express-flash') //To use send the msgs
    const MongoConnect = require('connect-mongo') //Store session into mongoose

    //Set the session and store into database
    app.use(session({
        secret: process.env.SECRET_SESSION,
        resave: false,
        saveUninitialized: false,
        store: MongoConnect.create({
            mongoUrl: `${uri}`
        }),
        cookie: { maxAge: 1000 * 60 * 60 * 24 } //Secret valid upto 24 hour
    }))
    app.use(flash());
    const ejs = require('ejs'); //Can used as templates engine
    const expressLayouts = require('express-ejs-layouts');

    const viewsPath = path.join(__dirname, './src/api/v1/templates/views');


    //-------------EJS Specific Stuff--------------------X
    app.set('view engine', 'ejs');
    app.use(expressLayouts);
    app.set('views', viewsPath);


    const Routers = require('./src/api/v1/routers');

    //---------------------Routes/EndPoints Specific Stuff--------------X
    app.use('/', Routers); //All pages which are related our app

}

//--------------Define the variables from '.env'-----------------X
const PORT = process.env.PORT || 8001;
const URL = process.env.URL;

//------------------Listen to the server--------------X
app.listen(PORT, () => console.log(`Application listen at ${URL}:${PORT}`));