const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema ({
    username: String,
    password: String,
    isLiked: [String],
    isDisliked: [String], 
    toTry: [String], 
})

module.exports = mongoose.model('User', UserSchema)