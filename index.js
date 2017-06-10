exports.add = add
exports.subtract = subtract
exports.multiply = multiply
exports.divide = divide
exports.direction = direction
exports.magnitude = magnitude

var atan = Math.atan2
var sqrt = Math.sqrt

function add(a, b) {
  return {
    x: a.x + b.x,
    y: a.y + b.y
  }
}

function subtract(a, b) {
  return {
    x: a.x - b.x,
    y: a.y - b.y
  }
}

function multiply(a, b) {
  if (!isNaN(b)) {
    return {
      x: a.x * b,
      y: a.y * b
    }
  } else {
    return {
      x: a.x * b.x,
      y: a.y * b.y
    }
  }
}

function divide(a, b) {
  if (!isNaN(b)) {
    return {
      x: a.x / b,
      y: a.y / b
    }
  } else {
    return {
      x: a.x / b.x,
      y: a.y / b.y
    }
  }
}

function direction(vector) {
	return atan(vector.y, vector.x)
}

function magnitude(vector) {
	return sqrt(vector.x * vector.x + vector.y * vector.y)
}
