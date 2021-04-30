const express = require('express')
const app = new express()
app.use(express.static('public'))
app.set('views', `${__dirname}/views`)

const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/node-js-blog', {useUnifiedTopology: true, useNewUrlParser: true, useCreateIndex: true })

const { config, engine } = require('express-edge')
app.use(engine)

const bodyParser = require('body-parser')
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

const fileUpload = require('express-fileupload')
app.use(fileUpload())

//store session
const expressSession = require('express-session')
const connectMongo = require('connect-mongo')
app.use(expressSession({
     secret: 'secret',
     resave: true,
     saveUninitialized: true,
     store: connectMongo.create({
        mongoUrl: 'mongodb://localhost/node-js-blog'
     })
}))

app.listen(4000, () => {
    console.log('App listening on port 4000')
})

const storePost = require('./middleware/storePost')
//app.use('/post/store', storePost)
const auth = require('./middleware/auth')

const homePageController = require('./controllers/homePage')
app.get('/', homePageController);
const createPostController = require('./controllers/createPost')
app.get('/post/new', auth, createPostController);
const storePostController = require('./controllers/storePost')
app.post('/post/store', auth, storePost, storePostController);
const getPostController = require('./controllers/getPost')
app.get('/posts/:id', getPostController);
const createUserController = require('./controllers/createUser')
app.get('/user/register', createUserController);
const storeUserController = require('./controllers/storeUser')
app.post('/user/store', storeUserController);
const loginController = require('./controllers/login')
app.get('/user/login', loginController)
const loginAuthController = require('./controllers/loginAuth')
app.post('/user/auth', loginAuthController)