const express = require('express');
const router = express.Router();
const LinksController = require('../controllers/LinksController');

// Set our routes based on controllers
router.route('/').get(LinksController.links);

module.exports = router;
