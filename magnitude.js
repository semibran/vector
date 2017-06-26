module.exports = magnitude

var dot = require('./dot')

function magnitude(vector) {
  return Math.sqrt(dot(vector, vector))
}
