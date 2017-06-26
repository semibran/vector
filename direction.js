module.exports = direction

var magnitude = require('./magnitude')

function direction(vector) {
  var dimensions = vector.length
  var length = dimensions - 1
  if (length !== 1) {
    var directions = new Array(length)
    for (var i = 0; i < length; i++) {
      var direction = Math.acos(vector[i] / magnitude(vector.slice(0, dimensions - i)))
      if (i === length - 1 && vector[length] < 0) {
        direction = 2 * Math.PI - direction
      }
      directions[i] = direction
    }
    return directions
  } else {
    return Math.atan2(vector[1], vector[0])
  }
}
