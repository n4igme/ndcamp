const Post = require('../database/models/Post')
module.exports = async (req, res) => {
    console.log(req.params)
    const posts = await Post.find(req.params).populate('author');
    res.render('by-category', {
        posts
    })
}