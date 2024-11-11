const mongoose = require('mongoose')

const User = new mongoose.Schema({
    userName: {
        type: String,
        required: true
    },
    userRole: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
})

const UserModel = mongoose.model('UserModel',User)

module.exports = UserModel