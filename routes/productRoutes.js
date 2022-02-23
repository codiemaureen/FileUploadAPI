const express = require('express');
const router = express.Router();

const productController = require('../controllers/productController');
const uploadsController = require('../controllers/uploadsController');


router.post('/', productController.createProducts);
router.get('/', productController.getAllProducts);
router.post('/uploads', uploadsController.uploadProductImage);

module.exports = router;