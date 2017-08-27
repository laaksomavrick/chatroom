const express = require('express')
const router = express.Router()

const chat_controller = require('./controllers/chat_controller')
router.get('/chat', chat_controller.index)
router.post('/chat', chat_controller.create)

module.exports = router

