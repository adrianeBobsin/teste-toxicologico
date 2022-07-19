const express = require('express')
const sampleController = require('../controllers/SampleController')
const passport = require('passport')

const router = express.Router()

router.post(
  '/sampleTest',
  passport.authenticate('jwt', { session: false }),
  sampleController.sampleTest
)
router.get('/list', passport.authenticate('jwt', { session: false }), sampleController.listSamples)

module.exports = router
