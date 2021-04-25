const express = require('express')
const app = new express()
const { config, engine } = require('express-edge')
const path = require('path')
const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/node-js-blog-dbtest', {useUnifiedTopology: true, useNewUrlParser: true, useCreateIndex: true })

app.use(express.static('public'))
app.use(engine)
app.set('views', `${__dirname}/views`)

app.listen(4000, () => {
    console.log('App listening on port 4000')
})

// app.get('/', (req, res) => {
//     res.sendFile(path.resolve(__dirname, 'pages/index.html'))
// })
 app.get('/', (req, res) => {
     res.render('index')
 })
app.get('/about', (req, res) => {
    res.render('about')
})
app.get('/contact', (req, res) => {
    res.render('contact')
})
app.get('/post', (req, res) => {
    res.render('post')
})