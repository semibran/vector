module.exports = function resolve(vector) {
  if (Array.isArray(vector.direction)) {
    var dimensions = vector.direction.length + 1
    var result = new Array(dimensions)
    for (var dimension = 1; dimension <= dimensions; dimension++) {
      var axis = vector.magnitude
      for (var i = 1; i <= dimension; i++) {
        if (i !== dimensions) {
          if (i === dimension) {
            axis *= Math.cos(vector.direction[i - 1])
          } else {
            axis *= Math.sin(vector.direction[i - 1])
          }
        }
      }
      result[dimension - 1] = axis
    }
    return result
  } else {
    return [
      vector.magnitude * Math.cos(vector.direction),
      vector.magnitude * Math.sin(vector.direction)
    ]
  }
}
