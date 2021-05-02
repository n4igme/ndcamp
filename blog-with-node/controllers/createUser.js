module.exports = (req, res) => {
    //console.log(req.session.registrationErrors)
    //console.log(req.flash('data')) --> this log will erase the data
    res.render('register', {
        //errors: req.session.registrationErrors
        errors: req.flash('registrationErrors'),
        data: req.flash('data')[0]
    })
}