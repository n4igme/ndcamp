const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/node-js-blog-dbtest', {useUnifiedTopology: true, useNewUrlParser: true, useCreateIndex: true })
const Post = require('./database/models/Post')

// Post.create({
//      title: "Title five",
//      description: "Description five",
//      content: "Lorem ipsum content five"
// }, (error, post) => {
//      console.log(error, post)
// })

//  Post.find({
//     title: "Title five"
//  }, (error, post) => {
//     console.log(error, post)
// })

// Post.findById('60850e7f2d13cb29c54eacd4', (error, post) => {
//     console.log(error, post)
// })

// Post.findByIdAndUpdate('60852dcb4a84212bbb092c69', {
//       title: "Title six",
//       description: "Description six",
//       content: "Lorem ipsum content six"
// }, (error, post) => {
//     console.log(error, post)
// })

Post.findByIdAndDelete('60850ec2e1358b29dde4dae8', (error, post) => {
     console.log(error, post)
})