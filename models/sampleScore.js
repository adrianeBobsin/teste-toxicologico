const mongoose = require('mongoose')
const Schema = mongoose.Schema

const sampleScoreDrug = new Schema({
  substances: [
    {
      name: { type: String, required: true },
      passingScore: { type: Number, required: true }
    }
  ]
})

const SampleScore = mongoose.model('sampleScores', sampleScoreDrug)

module.exports = SampleScore
