const path = require('path')

module.exports = {
  config: require(path.join(__dirname, '..', 'config', 'config.production.json'))
}
