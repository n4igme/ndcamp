const User = require('../database/models/User')
module.exports = (req, res) => {
    User.create(req.body, (error, user) => {
        console.log(error)
        if (error) {
            const registrationErrors = Object.keys(error.errors).map(key => error.errors[key].message)
            //req.session.registrationErrors = registrationErrors
            req.flash('registrationErrors', registrationErrors)
            req.flash('data', req.body)
            return res.redirect('/user/register')
        }
        res.redirect('/');
    })
}