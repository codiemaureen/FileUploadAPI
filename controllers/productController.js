const Product = require('../models/Product');
const {StatusCodes} = require('http-status-codes');

exports.createProducts = async(req, res) => {
    const product = await Product.create(req.body);
    res.status(StatusCodes.CREATED).json({product});
};

exports.getAllProducts = async(req, res) => {
    const product = await Product.find({});
    res.status(StatusCodes.OK).json({product});
};

