module.exports = function subtract(a, b) {
  var dimensions = Math.max(a.length, b.length)
  var result = new Array(dimensions)
  for (var i = 0; i < dimensions; i++) {
    result[i] = (a[i] || 0) - (b[i] || 0)
  }
  return result
}
