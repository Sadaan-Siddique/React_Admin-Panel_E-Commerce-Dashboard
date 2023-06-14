// Requires
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const db = require('./Models/db_connection');
const userSchema = require('./Models/UserSchema');

// Execution
const app = express();
const userModel = userSchema.userModel;

// Middle Wares
app.use(cors());
app.use(express.json());
db.db_Connection()

// Routes
app.post('/signin', async (req, res) => {
    console.log(req.body);
    const output = await userModel.find({});
    res.status(200).json({msg:'Data Recieved',output});
});

// Server Start
const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log(`Server has been started at Port ${port}`);
})