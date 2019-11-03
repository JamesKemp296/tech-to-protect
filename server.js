require('dotenv').config()
const express = require('express')
const app = express()
const mongoose = require('mongoose')
const cors = require('cors')
const bodyParser = require('body-parser')

app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//connect with the database
const uri = process.env.ATLAS_URI
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
const db = mongoose.connection
db.once('open', () => console.log('connected to the database'))
// checks if connection with the database is successful
db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const usersRouter = require('./routes/users')
app.use('/users', usersRouter)

// app.use('/api', router);

const PORT = process.env.PORT || 8080
app.listen(PORT, console.log(`Running in port ${PORT}`))