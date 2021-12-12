const express = require('express')
const router = express.Router()
const indexController = require('../controllers/index')

router.get('/', indexController.getIndex) 

router.post('/messages', indexController.createMessage)

router.put('/thumbUp', indexController.likeMessage)

router.delete('/deleteMessage', indexController.deleteMessage)

module.exports = router
