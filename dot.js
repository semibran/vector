module.exports = function dot(a, b) {
  var dimensions = Math.max(a.length, b.length)
  var result = 0
  for (var i = 0; i < dimensions; i++) {
    result += (a[i] || 0) * (b[i] || 0)
  }
  return result
}
