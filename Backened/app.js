const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const app = express();

app.use(cors());
app.use(express.json());

mongoose.connect('mongodb+srv://Sadaan:dbdb1@cluster0.qq2alg8.mongodb.net/Admin_Panel_Dashboard?retryWrites=true&w=majority');
mongoose.connection.on('error',(error)=>{
    console.log(error);
})
mongoose.connection.once('connected',()=>{
    console.log("Connected to MongoDB-Atlas");
})

app.post('/signin', (req, res) => {
    console.log(req.body);
    res.status(200).send('Data Recieved');
});

const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log(`Server has been started at Port ${port}`);
})