const Post = require('../database/models/Post')
module.exports = async (req, res) => {
    console.log(req.params)
    const posts = await Post.find({
        "category" : req.params.category
    }).populate('author').sort('-createdAt');
    res.render('index', {
        posts
    })
}