// Requires
const mongoose = require('mongoose');
require('dotenv').config();

// Connection to MongoDB Atlas Cluster
function db_Connection() {

    mongoose.connect(process.env.DB_LINK, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });
    mongoose.connection.on('error', (error) => {
        console.log(error);
    })
    mongoose.connection.once('connected', () => {
        console.log("Connected to the MongoDB-Atlas");
    })

}

// Export
module.exports = { db_Connection };