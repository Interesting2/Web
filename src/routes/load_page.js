const express = require('express');
const path = require('path');
const loadController = require('../controllers/load_page');

const router = express.Router();

router.get('/', loadController.loadIndex);
router.get('/:page', loadController.loadPage);

router.post('/login', loadController.userLogin);
router.post('/signup', loadController.userSignup);


module.exports = router;