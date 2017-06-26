module.exports = compose

var direction = require('./direction')
var magnitude = require('./magnitude')

function compose(vector) {
  return {
    direction: direction(vector),
    magnitude: magnitude(vector)
  }
}
