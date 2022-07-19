const express = require('express')
const sampleController = require('../controllers/SampleController')
const passport = require('passport')

const router = express.Router()

router.post(
  '/validateSample',
  passport.authenticate('jwt', { session: false }),
  sampleController.validateSample
)
router.get('/list', passport.authenticate('jwt', { session: false }), sampleController.listSamples)

module.exports = router
