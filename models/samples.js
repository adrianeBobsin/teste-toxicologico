const mongoose = require('mongoose')
const Schema = mongoose.Schema

const sampleSchema = new Schema({
  code: { type: String, maxLength: 8, required: true },
  drugsDetected: [
    { name: { type: String, required: true }, quantityDetected: { type: String, required: true } }
  ],
  drugDetected: { type: Boolean, required: true },
  cocaina: { type: Number, required: true },
  anfetamina: { type: Number, required: true },
  metanfetamina: { type: Number, required: true },
  mda: { type: Number, required: true },
  mdma: { type: Number, required: true },
  thc: { type: Number, required: true },
  morfina: { type: Number, required: true },
  codeina: { type: Number, required: true },
  heroina: { type: Number, required: true },
  benzoilecgonina: { type: Number, required: true },
  cocaetileno: { type: Number, required: true },
  norcocaina: { type: Number, required: true }
})

const Sample = mongoose.model('samples', sampleSchema)

module.exports = Sample
