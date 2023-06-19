// Requires
const express = require('express');
const userSchema = require('../../Models/UserSchema');
// Execution
const get_route = express();
const userModel = userSchema.userModel;

// Routes
get_route.get('/get_users', async (req, res) => {
    const users_output = await userModel.find({});
    console.log(users_output);

    res.status(200).json({msg:"Users",users_output});
})

// Exports
module.exports = get_route;
