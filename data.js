const mongoose = require('mongoose')
const Schema = mongoose.Schema

//data base structure

const DataSchema = new Schema(
    {
        id: Number,
        status: String,
        personalInfo: {
            name: String,
            age: Number,
            address: String,
            phone: String
        },
        medicalInfo: {
            respirations: Boolean,
            perfusion: Number,
            mentalStatus: Boolean
        }
    }
)

module.exports = mongoose.model('Data', DataSchema)