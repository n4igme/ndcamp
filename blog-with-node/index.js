require('dotenv').config()
//console.log(process.env)
const express = require('express')
const app = new express()
app.use(express.static('public'))
app.set('views', `${__dirname}/views`)

const mongoose = require('mongoose')
mongoose.connect(process.env.DB_URI, {useUnifiedTopology: true, useNewUrlParser: true, useCreateIndex: true })

const { engine } = require('express-edge')
app.use(engine)

const bodyParser = require('body-parser')
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

const fileUpload = require('express-fileupload')
app.use(fileUpload())

const cloudinary = require('cloudinary')
cloudinary.config({
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
    cloud_name: process.env.CLOUDINARY_NAME
})

//store session
const expressSession = require('express-session')
const connectMongo = require('connect-mongo')
app.use(expressSession({
     secret: 'secret',
     resave: true,
     saveUninitialized: true,
     store: connectMongo.create({
        mongoUrl: process.env.DB_URI
     })
}))

const connectFlash = require('connect-flash')
app.use(connectFlash())

const edge = require('edge.js')
app.use('*', (req, res, next) => {
    //edge.global('auth', req.session.userId)
    next()
})

const storePost = require('./middleware/storePost')
//app.use('/post/store', storePost)
const mustAuth = require('./middleware/mustAuth')
const ifAuth = require('./middleware/ifAuth')

const homePageController = require('./controllers/homePage')
app.get('/', homePageController);
const createPostController = require('./controllers/createPost')
app.get('/post/new', mustAuth, createPostController);
const storePostController = require('./controllers/storePost')
app.post('/post/store', mustAuth, storePost, storePostController);
const getPostController = require('./controllers/getPost')
app.get('/posts/:id', getPostController);
const createUserController = require('./controllers/createUser')
app.get('/user/register', ifAuth, createUserController);
const storeUserController = require('./controllers/storeUser')
app.post('/user/store', ifAuth, storeUserController);
const loginController = require('./controllers/login')
app.get('/user/login', ifAuth, loginController)
const loginAuthController = require('./controllers/loginAuth')
app.post('/user/auth', ifAuth, loginAuthController)
app.use((req, res) => res.render('404'))

app.listen(process.env.PORT, () => {
    console.log(`App listening on port ${process.env.PORT}`)
})