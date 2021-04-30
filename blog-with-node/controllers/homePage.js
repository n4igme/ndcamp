//const path = require('path')
const Post = require('../database/models/Post')
module.exports = async (req, res) => {
    //res.sendFile(path.resolve(__dirname, '../public/pages/index.html'))
    const posts = await Post.find({})
    // console.log(posts)
    // console.log(req.session)
    res.render('index', {
        posts
    })
}