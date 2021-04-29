const User = require('../database/models/User')
const bcrypt = require('bcrypt')
module.exports = (req, res) => {
    const { email, password } = req.body;
    //find the user
    User.findOne({ email }, (error, user) => {
        if(user){
            //compare password
            bcrypt.compare(password, user.password, (error, result) => {
                if(result){
                    //store user session
                    res.redirect('/')
                } else {
                    res.redirect('/user/login')
                }
            })
        } else {
            return res.redirect('/user/login')
        }
    })
}