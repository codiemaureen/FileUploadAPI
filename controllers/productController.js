const Product = require('../models/Product');
const {StatusCodes} = require('http-status-codes');

exports.createProducts = async(req, res) => {
    res.send('Create Products');
};

exports.getAllProducts = async(req, res) => {
    res.send('Get All Products');
};

