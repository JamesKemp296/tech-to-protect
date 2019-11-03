const mongoose = require('mongoose')
const { Schema } = mongoose

//data base structure

const userSchema = new Schema(
    {
        id: { type: Number },
        status: { type: String },
        personalInfo: {
            name: { type: String },
            age: { type: Number },
            address: { type: String },
            phone: { type: Number }
        },
        medicalInfo: {
            respirations: { type: Boolean },
            perfusion: { type: Number },
            mentalStatus: { type: Boolean }
        }
    }
)

module.exports = mongoose.model('User', userSchema)