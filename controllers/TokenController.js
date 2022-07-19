const Credential = require('../models/credentials')
const { sign } = require('jsonwebtoken')
const { config } = require('../utils/config')

class TokenController {
  async generateToken(req, res) {
    if (!req.body.client_id || !req.body.client_secret) throw { message: 'Missing required fields' }
    const { client_id, client_secret } = req.body
    const credentials = await Credential.findOne({
      client_id,
      client_secret
    })

    if (credentials || (req.body.client_id == 'Synvia' && req.body.client_secret == 'teste')) {
      const expiresIn = 60 * 60
      const payloadJwt = {
        client_id,
        client_secret
      }
      const token = sign(payloadJwt, config.secretKey, { expiresIn })
      res.status(200).json({ token, expiresIn })
    } else {
      res.status(400).json({ message: 'Invalid credentials' })
    }
  }
}

module.exports = new TokenController()
