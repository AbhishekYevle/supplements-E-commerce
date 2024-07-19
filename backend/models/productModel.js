// models/productModel.js
const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    title: { type: String, required: true },
    image: { type: String, required: true },
    mrp: { type: Number, required: true },
    price: { type: Number, required: true },
});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;
