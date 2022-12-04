function HomeController() {
    return {
        Index(req, res) {
            res.render('index')
        },

        //Error Page
        Error(req,res){
            res.render('error')
        }
    }
}

module.exports = HomeController