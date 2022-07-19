const express = require('express')
const tokenController = require('../controllers/TokenController')

const router = express.Router()

router.post('/token', tokenController.generateToken)

module.exports = router
