require('dotenv').config()
const express = require('express')
const app = express()
const mongoose = require('mongoose')
const cors = require('cors')
const router = express.Router()
const User = require('./User')

app.use(cors())

// const dbRoute = 'mongodb+srv://andresurdaneta:55865656@techtoprotect-g3o5b.mongodb.net/test?retryWrites=true&w=majority'

//connect with the database
const uri = process.env.ATLAS_URI
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
const db = mongoose.connection
db.once('open', () => console.log('connected to the database'))
// checks if connection with the database is successful
db.on('error', console.error.bind(console, 'MongoDB connection error:'))

// get method
// this method fetches all available data in our database
router.get('/getUser', (req, res) => {
    User.find((err, user) => {
        if (err) return `this is the error ${err}`
        return res.json({ user })
    })
})

//create method
router.post('/putUser', (req, res) => {
    let user = new User()

    const { id } = req.body;

    user.id = id;
    user.save((err) => {
        if (err) return `This is the error ${err}`
        return res.json({ user })
    })
})

app.use('/api', router);

const PORT = process.env.PORT || 8080
app.listen(PORT, console.log(`Running in port ${PORT}`))