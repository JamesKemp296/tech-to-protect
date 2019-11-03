const mongoose = require('mongoose')
const { Schema } = mongoose

//data base structure

const userSchema = new Schema(
    {
        id: { type: Number },
        status: { type: String }
    }
)

module.exports = mongoose.model('User', userSchema)