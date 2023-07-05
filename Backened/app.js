// Requires
const express = require('express');
const cors = require('cors');
const db = require('./Models/db_connection.js');
const userSchema = require('./Models/UserSchema.js');
const routes_middleWares = require('./Controllers/routes_middlewares.js');

// Execution
const app = express();
const userModel = userSchema.userModel;

// Middle Wares
db.db_Connection();
app.use(cors());
app.use(express.json());
app.use('/', routes_middleWares);
app.use('/product_images', (express.static('product_images')));

// Routes
app.post('/signin', async (req, res) => {
    console.log(req.body);
    const userOutput = await userModel.findOne({ email: req.body.email });
    res.status(200).json({ msg: 'You have Logged In Successfully', userOutput });
});

// Server Start
const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log(`Server has been started at Port ${port}`);
})