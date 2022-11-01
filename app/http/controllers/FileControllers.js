//-----------Imports the modals which are used into-------------X
const FileModal = require('../../modals/FileModal'); //handle all the content related to file


function FileController() {
    return {
        //Upload the file using POST '/upload'
        async Upload(req,res){

        },

        Download(req,res){
            res.render('download');
        }
    }
}

module.exports = FileController;