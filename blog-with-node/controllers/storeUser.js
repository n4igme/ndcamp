const User = require('../database/models/User')
module.exports = (req, res) => {
    User.create(req.body, (error, user) => {
        console.log(error)
        if (error) {
            //console.log(Object.keys(error.errors).map(key => error.errors[key].message))
            return res.redirect('/user/register')
        }
        res.redirect('/');
    })
}