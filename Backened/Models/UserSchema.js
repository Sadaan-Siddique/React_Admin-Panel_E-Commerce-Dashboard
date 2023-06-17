// Requires
const mongoose = require('mongoose');

//  User Schema
const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        match: /\S+@gmail\.com/
    },
    password: {
        type: String,
        minlength: [6, 'Password must be at least 6 characters long'],
        maxlength: [1024, 'Password cannot exceed more than {MAXLENGTH} characters'],
        required: true
    },
    createdOn: {
        type: String
    },
    role: {
        type: String,
        enum: ['user', 'admin'],
        default: 'user'
    }
});

// User Model 
const userModel = new mongoose.model('users', userSchema);

// Exports
module.exports = { userModel };
