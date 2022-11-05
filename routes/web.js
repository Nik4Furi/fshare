const Router = require('express').Router();

//----------------Imports all the controllers----------------X
const HomeController = require('../app/http/controllers/HomeControllers'); //Controlls all logic related with home page
const FileController = require('../app/http/controllers/FileControllers'); //Controlls all logic related with files

//--------------------Start to create our routers------------------X
Router.get('/',HomeController().Index); //Show our home page
Router.post('/upload',FileController().Upload); //Upload the file
Router.get('/show/:uuid',FileController().Show); //Show Uploading the file
Router.get('/download/:uuid',FileController().Download); //Show download page

module.exports = Router