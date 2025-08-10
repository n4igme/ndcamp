module.exports = (req, res, next) => {
    if(!req.files.image || !req.body.title || !req.body.category || !req.body.content) {
        return res.redirect('/post/new')
    }
    next()
}