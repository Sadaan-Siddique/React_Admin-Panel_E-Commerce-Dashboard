const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());

app.post('/signin', (req, res) => {
    console.log(req.body);
    res.status(200).send('Data Recieved');
});

const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log(`Server has been started at Port ${port}`);
})