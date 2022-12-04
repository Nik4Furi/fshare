//-----------Imports the modals which are used into-------------X
const FileModal = require('../../../modals/FileModal'); //handle all the content related to file
const path = require('path');

//Middle wares used 
const UploadFile = require('../middlewares/UploadFile'); //Uploads files save

//Config function
const DeleteDoc24Hour = require('../../../config/DeleteDoc24Hour'); //Delete documents upto 24 hours less

//Import dependies form 'package.json'
const { v4: uuid4 } = require('uuid'); //To generates unqiues ids for files

function FileController() {
    return {
        //Upload the file using POST '/upload'
        async Upload(req, res) {
            //Storing the files
            UploadFile(req, res, async (e) => {
                try {
                    //Check the error
                    if (e) {
                        res.redirect('/', { error: 'Something went wrong during uploading a file' });
                    }

                    //Stores the files into database
                    let file = new FileModal({
                        filename: req.file.filename,
                        path: req.file.path,
                        size: req.file.size,
                        uuid: uuid4()
                    })

                    //Save the response
                    let response = await file.save();
                    let copyLink = `${process.env.URL}:${process.env.PORT}/show/${response.uuid}`

                    //Delete files which old from 24 hours
                    try {await DeleteDoc24Hour(FileModal);
                    } catch (error) {}

                    //rende the link to copy for show the download page
                    req.flash('success', 'file uploading successfully, share or copy link');
                    req.flash('copyLink', copyLink)
                    return res.redirect('/');

                } catch (error) {
                    //rende the link to copy for show the download page
                    req.flash('error', `Something went wrong,Try again ${error}`)
                    return res.redirect('/');
                }
            })
        },

        //Show the given file,which we have uuid ,using POST '/show'
        async Show(req, res) {
            try {
                //Fetch the file which have uuid
                let file = await FileModal.findOne({ uuid: req.params.uuid });

                //Check if file is exist 
                if (!file) {
                    req.flash('error', 'file does not exist')
                    return res.redirect('/');
                }

                return res.render('download', {
                    filename: file.filename,
                    size: parseInt(file.size / 1000),
                    download: `${process.env.URL}:${process.env.PORT}/download/${file.uuid}`
                })

            } catch (error) {
                //rende the link to copy for show the download page
                req.flash('error', 'Something went wrong,Try again')
                return res.redirect('/');
            }
        },

        async Download(req, res) {
            try {
                //Fetch the file which have uuid
                let file = await FileModal.findOne({ uuid: req.params.uuid });

                //Check if file is exist 
                if (!file) {
                    req.flash('error', 'file does not exist')
                    return res.redirect('/');
                }
                res.download(file.path); //download the file have given path

            } catch (error) {
                //rende the link to copy for show the download page
                req.flash('error', 'Something went wrong,Try again')
                res.redirect(`/download/${file.uuid}`);
            }
        }
    }
}

module.exports = FileController;