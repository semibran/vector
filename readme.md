# vctr
> Minimal operations for two-dimensional vectors

In two dimensions, a vector can be represented by a map with the two fields `x` and `y`. This module contains a few small functions for manipulating these kinds of objects.

## install
```sh
npm install vctr
```

## usage
```js
const { add, subtract, ... } = require('vctr')
```

### `add(a, b)`
Returns the sum of the two provided vectors.

### `subtract(a, b)`
Returns the difference between the two provided vectors.

### `multiply(a, b)`
Returns the product of the two provided vectors. The second argument may be a scalar quantity (a `Number`) if desired.

### `divide(a, b)`
Returns the quotient of the two provided vectors. The second argument may be a scalar quantity (a `Number`) if desired.

### `dot(a, b)`
Determines the dot product of the two provided vectors.

### `cross(a, b)`
Determines the magnitude of the cross product of the two provided vectors.

### `compose(vector)`
Converts `vector` from Cartesian coordinates (`x` and `y`) to polar coordinates (`direction` and `magnitude`).

### `resolve(vector)`
Converts `vector` from polar coordinates (`direction` and `magnitude`) to Cartesian coordinates (`x` and `y`).

### `direction(vector)`
Calculates the direction in which `vector` is pointing, in radians.

### `magnitude(vector)`
Calculates the distance covered by `vector`.

### `normalize(vector)`
Converts `vector` to a unit vector.

### `distance(a, b)`
Determines the distance (a scalar quantity) between the two provided vectors.

## see also
- [`radians`](https://www.npmjs.com/package/radians) - convert between radians and degrees

## license
[MIT](https://opensource.org/licenses/MIT) © [Brandon Semilla](https://git.io/semibran)
