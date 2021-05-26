const Post = require('../database/models/Post')
module.exports = async (req, res) => {
    console.log(req.params)
    const posts = await Post.find({
        author: {_id: req.params.id}
    }).populate('author');
    res.render('index', {
        posts
    })
}