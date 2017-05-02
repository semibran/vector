module.exports = Vector2D
Vector2D.compose = compose
Vector2D.direction = direction
Vector2D.magnitude = magnitude
Vector2D.normalize = normalize
Vector2D.distance = distance
Vector2D.equals = equals
Vector2D.add = add
Vector2D.subtract = subtract
Vector2D.negate = negate
Vector2D.multiply = multiply
Vector2D.divide = divide
Vector2D.invert = invert

function Vector2D (x, y) {
	return { x: x, y: y }
}

function compose (vector) {
	return {
		direction: direction(vector),
		magnitude: magnitude(vector)
	}
}

function direction (vector) {
	return Math.atan2(vector.y, vector.x)
}

function magnitude (vector) {
	return Math.sqrt(vector.x * vector.x + vector.y * vector.y)
}

function normalize (vector) {
	return divide(vector, magnitude(vector))
}

function distance (vector, other) {
	return magnitude(subtract(clone(other), vector))
}

function equals (vector, other) {
	return vector.x === other.x && vector.y === other.y
}

function add (vector, other) {
	return Vector2D(vector.x + other.x, vector.y + other.y)
}

function subtract (vector, other) {
	return Vector2D(vector.x - other.x, vector.y - other.y)
}

function negate (vector) {
	return Vector2D(-vector.x, -vector.y)
}

function multiply (vector, other) {
	if (!isNaN(other)) {
		return Vector2D(vector.x * other, vector.y * other)
	} else {
		return Vector2D(vector.x * other.x, vector.y * other.y)
	}
}

function divide (vector, other) {
	if (!isNaN(other)) {
		return Vector2D(vector.x / other, vector.y / other)
	} else {
		return Vector2D(vector.x / other.x, vector.y / other.y)
	}
}

function invert (vector) {
	return Vector2D(1 / vector.x, 1 / vector,y)
}
