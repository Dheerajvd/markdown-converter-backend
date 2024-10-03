const express = require('express');
const router = express.Router();
const markdownController = require('../controllers/markdown.controller');

// Define the route and associate it with the controller
router.post('/convert-markdown', markdownController.convertMarkdown);

module.exports = router;
