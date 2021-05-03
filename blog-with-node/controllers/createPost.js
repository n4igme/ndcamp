module.exports = (req, res) => {
    if(req.session.userId){
        return res.render('new-post')
    }

    res.redirect('/user/login')
}