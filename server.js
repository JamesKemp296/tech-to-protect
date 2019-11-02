const express = require('express')
const app = express()
const mongoose = require('mongoose')
const bodyParse = require('body-parser')

const dbRoute =
    'mongodb+srv://andresurdaneta:55865656@techtoprotect-g3o5b.mongodb.net/test?retryWrites=true&w=majority'

const PORT = process.env.PORT || 8080
app.listen(PORT, console.log(`Running in port ${PORT}`))