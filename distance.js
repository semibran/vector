module.exports = distance

var magnitude = require('./magnitude')
var subtract = require('./subtract')

function distance(a, b) {
  return magnitude(subtract(b, a))
}
