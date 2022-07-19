const mongoose = require('mongoose')
const Schema = mongoose.Schema

const credentialsSchema = new Schema({
  client_id: {
    type: String,
    required: true
  },
  client_secret: {
    type: String,
    required: true
  }
})

const Credential = mongoose.model('credentials', credentialsSchema)

module.exports = Credential
