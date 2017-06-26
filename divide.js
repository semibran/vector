module.exports = function divide(a, b) {
  var dimensions = Math.max(a.length, b.length)
  var result = new Array(dimensions)
  if (Array.isArray(b)) {
    for (var i = 0; i < dimensions; i++) {
      result[i] = (a[i] || 0) / (b[i] || 0)
    }
  } else {
    for (var i = 0; i < dimensions; i++) {
      result[i] = (a[i] || 0) / b
    }
  }
  return result
}
