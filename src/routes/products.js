const express = require('express');
const path = require('path');
const productController = require('../controllers/products');


const router = express.Router();
// const staticPath = path.join(__dirname, '..', 'static_content');

router.post('/clothings/clothing', productController.loadClothings);   // render pages or load more function

module.exports = router;