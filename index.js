exports.add = add
exports.subtract = subtract
exports.multiply = multiply
exports.divide = divide
exports.dot = dot
exports.cross = cross
exports.compose = compose
exports.resolve = resolve
exports.direction = direction
exports.magnitude = magnitude
exports.normalize = normalize
exports.distance = distance

var cos = Math.cos
var sin = Math.sin
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

function dot(a, b) {
  return a.x * b.x + a.y * b.y
}

function cross(a, b) {
  return a.x * b.y - b.x * a.y
}

function compose(vector) {
  return {
    direction: direction(vector),
    magnitude: magnitude(vector)
  }
}

function resolve(vector) {
  var direction = vector.direction
  var magnitude = vector.magnitude
  return {
    x: cos(direction) * magnitude,
    y: sin(direction) * magnitude
  }
}

function direction(vector) {
	return atan(vector.y, vector.x)
}

function magnitude(vector) {
	return sqrt(vector.x * vector.x + vector.y * vector.y)
}

function normalize(vector) {
  return divide(vector, magnitude(vector) || 1)
}

function distance(a, b) {
  return magnitude(subtract(b, a))
}
