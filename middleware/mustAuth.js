const User = require('../database/models/User')
module.exports = (req, res, next) => {
    // fetch user from db, if it valid permit request. Else redirect...
    User.findById(req.session.userId, (error, user) => {
        if(error || !user) {
            return res.redirect('/')
        }
        next()
    })
}