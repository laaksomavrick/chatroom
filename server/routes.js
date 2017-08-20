const express = require('express');
const router = express.Router();

const chat_controller = require('./controllers/chat_controller');

router.get('/', chat_controller.index);

module.exports = router;

