// Requires
const express = require('express');
const get_route = require('./Routes/getRoutes');
const post_route = require('./Routes/postRoutes');

// Execution
const routes_middleWares = express();

// Middle Wares
routes_middleWares.use('/api',get_route);
routes_middleWares.use('/api',post_route);

// Index Routes
routes_middleWares.get('/',(req,res)=>{
    res.status(200).send('GET Index Route');
})
routes_middleWares.post('/',(req,res)=>{
    res.status(200).send('POST Index Route');
})

// Export 
module.exports = routes_middleWares;