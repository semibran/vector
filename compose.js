var direction = require('./direction')
var magnitude = require('./magnitude')

module.exports = function compose(vector) {
  return {
    direction: direction(vector),
    magnitude: magnitude(vector)
  }
}
