const express = require('express')
const app = new express()
const { config, engine } = require('express-edge')
const path = require('path')
const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/node-js-blog', {useUnifiedTopology: true, useNewUrlParser: true, useCreateIndex: true })
const bodyParser = require('body-parser')
const Post = require('./database/models/Post')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.static('public'))
app.use(engine)
app.set('views', `${__dirname}/views`)

app.listen(4000, () => {
    console.log('App listening on port 4000')
})

// app.get('/', (req, res) => {
//     res.sendFile(path.resolve(__dirname, 'pages/index.html'))
// })
 app.get('/', async (req, res) => {
     const posts = await Post.find({})
     console.log(posts)
     res.render('index', {
         posts
     })
 })
app.get('/about', (req, res) => {
    res.render('about')
})
app.get('/contact', (req, res) => {
    res.render('contact')
})

app.get('/sample-post', (req, res) => {
    res.render('sample-post')
})
app.get('/posts/:id', async (req, res) => {
    console.log(req.params)
    const post = await Post.findById(req.params.id)
    res.render('post', {
        post
    })
})
app.get('/post/new', (req, res) => {
    res.render('create')
})
app.post('/post/store', (req, res) => {
    Post.create(req.body, (error, post) => {
        //console.log(req.body)
        res.redirect('/')
    })
})