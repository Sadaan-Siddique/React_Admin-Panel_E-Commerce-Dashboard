// Requires
const mongoose = require('mongoose');

// Product Schema
const productSchema = new mongoose.Schema({
    imageName: {
        type: String,
        required: true
    },
    imageUrl: {
        type: String,
        required: true
    },
    productName: {
        type: String,
        required: true
    },
    status: {
        type: String,
        required: true
    },
    costPrice: {
        type: Number,
        required: true
    },
    salesPrice: {
        type: Number,
        required: true
    },
    quantity: {
        type: Number,
        required: true
    },
    productDescription: {
        type: String,
        required: true
    }
})

// Model
const productModel = new mongoose.model('products', productSchema);

// Exports
module.exports = { productModel };