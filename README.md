# vector2d
> Basic operations for two-dimensional vectors

## usage
```javascript
const Vector2D = require('vector2d')
```

- ### `Vector2D`
Creates a new `Vector2D` from the given `x` and `y` coordinates. Alternatively, you may use `{ x: x, y: y }` to achieve the same result.

- ### `compose`
Converts the given vector into a standard `Vector` of the form `{ direction, magnitude }`. (The original vector is not modified.)

- ### `direction`
Calculates the direction in which the given vector is pointing, in radians.

- ### `magnitude`
Calculates the distance covered by the given vector.

- ### `normalize`
Converts the given vector into a unit vector. (The original vector is not modified.)

- ### `equals`
Determines if the given vectors are equivalent.

- ### `add`
Finds the sum of the two provided vectors.

- ### `subtract`
Finds the difference between the two provided vectors.

- ### `negate`
Finds the opposite of the given vector.

- ### `multiply`
Finds the product of the two provided vectors. The second argument may be a scalar quantity (`Number`) if desired.

- ### `divide`
Finds the quotient of the two provided vectors. The second argument may be a scalar quantity (`Number`) if desired.

- ### `invert`
Finds the reciprocal of the given vector.


## install
```sh
npm install semibran/vector2d
```


## license
MIT
