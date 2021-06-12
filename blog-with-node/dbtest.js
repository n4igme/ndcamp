require('dotenv').config()
const mongoose = require('mongoose')
mongoose.connect(process.env.DB_URI, {useUnifiedTopology: true, useNewUrlParser: true, useCreateIndex: true })
const Post = require('./database/models/Post')

// Post.create({
//      title: "Title five",
//      description: "Description five",
//      content: "Lorem ipsum content five"
// }, (error, post) => {
//      console.log(error, post)
// })

var q = "Play"
Post.find({
    //$text: { $search: q }
    title: {$regex: new RegExp(q)}
}, (error, post) => {
    console.log(error, post)
})

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

// Post.findByIdAndDelete('60850ec2e1358b29dde4dae8', (error, post) => {
//      console.log(error, post)
// })

// Post.paginate({}, { page: 2, limit: 10 })
//   .then(response => {
//     /**
//      * Response looks like:
//      * {
//      *   docs: [...] // array of Posts
//      *   total: 42   // the total number of Posts
//      *   limit: 10   // the number of Posts returned per page
//      *   page: 2     // the current page of Posts returned
//      *   pages: 5    // the total number of pages
//      * }
//     */
//   })
//   .catch(handleQueryError);