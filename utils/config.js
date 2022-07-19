const path = require('path')
const env = process.env.NODE_ENV || 'development'

module.exports = {
  /*config:
    env === 'production'
      ? require(path.join(__dirname, '..', 'config', 'config.production.json'))
      : require(path.join(__dirname, '..', 'config', 'config.development.json')),
*/
  configDev: process.env.MONGODB_URI,

  configProd: process.env.MONGODB_URI
}
