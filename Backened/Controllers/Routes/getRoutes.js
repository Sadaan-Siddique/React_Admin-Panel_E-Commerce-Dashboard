// Requires
const express = require('express');
const userSchema = require('../../Models/UserSchema');
const productSchema = require('../../Models/ProductSchema');
const path = require('path');

// Execution
const get_route = express();
const userModel = userSchema.userModel;
const productModel = productSchema.productModel;

// Routes

// Fetching Users from database...
get_route.get('/get_users', async (req, res) => {
    try {
        const users_output = await userModel.find({});
        console.log(users_output);
        res.status(200).json({ msg: "Users", users_output });
    } catch (error) {
        console.log(error);
        re.status(500).send('Internal Server Error');
    }
})

// Fetching Products from database... 
get_route.get('/get_products', async (req, res) => {
    try {
        const products_output = await productModel.find({});
        const modified_products = products_output.map((item) => {
            const url = item.imageUrl.replace(/\\/g, '/');
            const imageUrl = url.replace('Controllers/', '');
            return {
                ...item._doc,
                imageUrl: `${req.protocol}://${req.get('host')}/${imageUrl}`,
            };
        })
        console.log(modified_products);
        res.status(200).json({ msg: 'Products ', modified_products });
    } catch (error) {
        console.log(error);
        res.status(500).send('Internal Server Error');
    }
})
get_route.use(express.static(path.join(__dirname, 'public'), { maxAge: '1y' }));

// Exports
module.exports = get_route;
