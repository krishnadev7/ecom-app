const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name: String,
    category: String,
    price: String,
    description: String,
    Image: String
})

module.exports = Product = mongoose.model("Product",productSchema); 