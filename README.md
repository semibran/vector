# vector2d
> Basic 2D vector operations

## usage
```javascript
const { add, subtract, multiply, divide... } = require('vector2d')
```

### `add`
Finds the sum of the two provided vectors.

### `subtract`
Finds the difference between the two provided vectors.

### `multiply`
Finds the product of the two provided vectors. The second argument may be a scalar quantity (`Number`) if desired.

### `divide`
Finds the quotient of the two provided vectors. The second argument may be a scalar quantity (`Number`) if desired.

### `equals`
Determines if the given vectors are equivalent.

### `compose`
Converts the given vector into a standard `Vector` of the form `{ direction, magnitude }`. (The original vector is not modified.)

### `direction`
Calculates the direction in which the given vector is pointing, in radians.

### `magnitude`
Calculates the distance covered by the given vector.

### `normalize`
Converts the given vector into a unit vector. (The original vector is not modified.)


## install
```sh
npm install semibran/vector2d
```


## license
MIT
