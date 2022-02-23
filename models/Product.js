const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'You must supply a product name']
    },
    price: {
        type: Number,
        required: [true, 'You must supply a product price']
    },
    image: {
        type: String,
        required: [true, 'You must supply a product image']
    },
});

module.exports = mongoose.model('Product', productSchema);