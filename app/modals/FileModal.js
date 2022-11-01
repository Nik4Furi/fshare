const mongoose = require('mongoose');

const validator = require('validator'); //Validating the emails

//Create the schema to save the files
const fileSchema = mongoose.Schema({
    filename : {
        type : String,
        require : true
    },
    path : {
        type : String,
        require : true
    },
    size : {
        type : Number,
        require : true
    },
    uuid : {
        type : String,
        require : true
    },
    sender : {
        type : String,
        validate(value){
            if (!validator(value).isEmail()) {
                throw new Error(`${value} is not valid email`);
            }
        }
    },
    receiver : {
        type : String,
        validate(value){
            if (!validator(value).isEmail()) {
                throw new Error(`${value} is not valid email`);
            }
        }
    }
})

//File collection 
const fileModal = new mongoose.model('File',fileSchema);

module.exports = fileModal;