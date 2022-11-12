const mongoose = require('mongoose');

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
    }
    
},{timestamps:true})

//File collection 
const fileModal = new mongoose.model('File',fileSchema);

module.exports = fileModal;