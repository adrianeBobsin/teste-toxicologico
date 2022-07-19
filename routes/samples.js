const express = require('express')
const sampleController = require('../controllers/SampleController')

const router = express.Router()

router.post('/sampleTest', sampleController.sampleTest)
router.get('/listAll', sampleController.listSamples)

module.exports = router
