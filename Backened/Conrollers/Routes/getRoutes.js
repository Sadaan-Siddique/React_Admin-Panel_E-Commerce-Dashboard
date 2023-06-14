// Requires
const express = require('express');

// Execution
const get_route = express();

// Routes
get_route.get('/get_users', (req, res) => {
    res.status(200).send("Users");
})

// Exports
module.exports = get_route;
