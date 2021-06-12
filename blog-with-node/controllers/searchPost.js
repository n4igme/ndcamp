const Post = require('../database/models/Post')
module.exports = async (req, res) => {
    console.log(req.params)
    const posts = await Post.find({
        title: {$regex: new RegExp(req.params.q)}
    }).populate('author');
    res.render('index', {
        posts
    })
}