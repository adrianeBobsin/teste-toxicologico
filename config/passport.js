const ExtractJwt = require('passport-jwt').ExtractJwt
const { config } = require('../utils/config')
const JwtStrategy = require('passport-jwt').Strategy
const credential = require('../models/credentials')
const { configProd } = require('../utils/config')

module.exports = async passport => {
  const paramsJwt = {
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: configProd
  }
  passport.use(
    new JwtStrategy(paramsJwt, async (payload, done) => {
      try {
        let credentials = await credential.findOne({
          client_secret: payload.client_secret,
          client_id: payload.client_id
        })
        if (credentials) {
          return done(null, { success: true })
        } else {
          return done(null, false)
        }
      } catch (error) {
        return done(error)
      }
    })
  )
}
