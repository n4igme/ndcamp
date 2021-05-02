const mongoose = require('mongoose')

///Users, Post, Products
const PostSchema = new mongoose.Schema({
    title: String,
    description: String,
    content: String,
    //username: String,
    author: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    image: mongoose.Schema.Types.String,
    createdAt : {
        type: Date,
        default: new Date()
    }
})

const Post = mongoose.model('Post', PostSchema)
module.exports = Post