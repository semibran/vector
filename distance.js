var magnitude = require('./magnitude')
var subtract = require('./subtract')

module.exports = function distance(a, b) {
  return magnitude(subtract(b, a))
}
