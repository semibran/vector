module.exports = { compose, direction, magnitude, normalize, equals, add, subtract, multiply, divide }

function compose(vector) {
	return {
		direction: direction(vector),
		magnitude: magnitude(vector)
	}
}

function direction(vector) {
	return Math.atan2(vector.y, vector.x)
}

function magnitude(vector) {
	return Math.sqrt(vector.x * vector.x + vector.y * vector.y)
}

function normalize(vector) {
	return divide(vector, magnitude(vector))
}

function equals(vector, other) {
	return vector.x === other.x && vector.y === other.y
}

function add(vector, other) {
	return {
		x: vector.x + other.x,
		y: vector.y + other.y
	}
}

function subtract(vector, other) {
	return {
		x: vector.x - other.x,
		y: vector.y - other.y
	}
}

function multiply(vector, other) {
	if (!isNaN(other)) {
		return {
			x: vector.x * other,
			y: vector.y * other
		}
	} else {
		return {
			x: vector.x * other.x,
			y: vector.y * other.y
		}
	}
}

function divide(vector, other) {
	if (!isNaN(other)) {
		return {
			x: vector.x / other,
			y: vector.y / other
		}
	} else {
		return {
			x: vector.x / other.x,
			y: vector.y / other.y
		}
	}
}
