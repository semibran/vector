var dot = require('./dot')

module.exports = function magnitude(vector) {
  return Math.sqrt(dot(vector, vector))
}
