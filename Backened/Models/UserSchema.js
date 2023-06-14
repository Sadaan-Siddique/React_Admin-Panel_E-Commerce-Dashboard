// Requires
const mongoose = require('mongoose');

//  User Schema
const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        match: /\S+@\S+\.\S+/
    },
    password: {
        type: String,
        minlength: [6, 'Password must be at least 5 characters long'],
        maxlength: [1024, 'Password cannot exceed more than {MAXLENGTH} characters'],
        required: true
    }
})

// User Model 
const userModel = new mongoose.model('users', userSchema);

// Exports
module.exports = { userModel };
