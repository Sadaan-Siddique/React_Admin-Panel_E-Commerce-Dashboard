// Requries
const express = require('express');
const userSchema = require('../../Models/UserSchema');

// Execution
const post_route = express();
const userModel = userSchema.userModel;
// Routes
post_route.post('/signin', async (req, res) => {
    const newUser = new userModel({
        username: req.body.username,
        email: req.body.email,
        password: req.body.password
    })
    console.log(newUser);
    const output = await newUser.save();
    console.log(output);
    res.status(200).json({ msg: "Sign in", output });

})

// Export
module.exports = post_route;