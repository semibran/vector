var divide = require('./divide')
var magnitude = require('./magnitude')

module.exports = function normalize(vector) {
  return divide(vector, magnitude(vector) || 1)
}
