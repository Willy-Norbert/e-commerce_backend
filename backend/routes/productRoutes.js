const express = require('express');
const router = express.Router();
const { getProducts, createProduct } = require('../controllers/productController');

router.get('/', getProducts);
router.post('/', createProduct); // This handles POST requests

module.exports = router;
