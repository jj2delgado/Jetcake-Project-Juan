require('dotenv').config()
const express = require('express')
const massive = require('massive')
const session = require('express-session')
//everything above has been installed

const uc = require('./Controllers/userController')
const initSession = require('./Middleware/initSession')

const {SERVER_PORT, SESSION_SECRET, CONNECTION_STRING} = process.env

const app = express()
app.use(express.json())
//used to to receive json objects through req.body

app.use(
    session({
        secret: SESSION_SECRET,
        saveUninitialized: true,
        resave: false,
        cookie: {
            maxAge: 1000 * 60 * 60 * 24 * 7
        }
    })
)

app.use(initSession)

massive(CONNECTION_STRING).then(db =>
    {app.listen(SERVER_PORT, () => console.log('Listening on port ', SERVER_PORT))
        app.set('db', db)})

        app.get('/api/test', (req, res) => {
            res.sendStatus(209)
    })

//user endpoints
app.post('/api/register', uc.register)
app.post('/api/login', uc.login)
app.delete('/api/logout', uc.logout)
app.put('/api/editUser/personal', uc.editUserPersonal)
app.put('/api/editUser/pic', uc.editUserProfilePic)
