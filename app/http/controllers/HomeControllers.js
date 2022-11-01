function HomeController() {
    return {
        Index(req, res) {
            res.render('index')
        }
    }
}

module.exports = HomeController