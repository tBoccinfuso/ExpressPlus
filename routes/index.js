const express = require('express');
const IndexController = require('../controllers/IndexController');
const router = express.Router();

// Set our routes based on controllers
router.route('/').get(IndexController.index);
router.route('/hello').get(IndexController.hello);

module.exports = router;
