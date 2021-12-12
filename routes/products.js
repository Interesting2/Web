const express = require('express');
const path = require('path');
const productController = require('../controllers/products');


const router = express.Router();
// const staticPath = path.join(__dirname, '..', 'static_content');

router.get('/clothings/:function', productController.load);   // render pages or load more function

module.exports = router;