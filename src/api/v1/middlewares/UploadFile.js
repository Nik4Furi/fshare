//---------import the dependies to uploads files
const multer = require('multer');
const path = require('path');

// console.log(path.join(__dirname,'../../../../uploads'));

//Define the storage where to save our files
const Storage = multer.diskStorage({
    destination : `${path.join(__dirname,'../../../../uploads')}`,
    filename : (req,file,cb)=>{
        const uniqueName = `${Date.now()}-${Math.floor(Math.random() * 1E9)}${path.extname(file.originalname)}`;
        cb(null,uniqueName);
    }
})

//Define the uploads with some limitations
const Upload = multer({
    storage : Storage,
    limits : {fileSize : 1000 * 1000 * 100}
}).single('myfile')

module.exports = Upload; 