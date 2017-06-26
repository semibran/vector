module.exports = normalize

var divide = require('./divide')
var magnitude = require('./magnitude')

function normalize(vector) {
  return divide(vector, magnitude(vector) || 1)
}
