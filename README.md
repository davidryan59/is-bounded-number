# Is Bounded Number (`is-bounded-number`)

Provides a very simple and compact check on whether an input is:
- Numeric
- Finite (not Infinity or NaN)
- Within a given range

## Install
`npm install is-bounded-number`  

## Test
`npm test`  

## Usage
``` js
var ibn = require('is-bounded-number')

ibn(0)             // true
ibn(1)             // true
ibn(1000000)       // true
ibn(1e15)          // true
ibn(1e15+1)        // false - outside default limit

ibn(1000, 1e6)     // true - 1000 is less than 1e6
ibn(1e6, 1000)     // true - 1e6 is not within bounds +/- 1000

ibn(null)          // false
ibn("aString")     // false
ibn(true)          // false
ibn(false)         // false
ibn(Infinity)      // false
ibn(NaN)           // false
```

## API
``` js
ibn(input)         // Checks whether input is within +/- 1e15
ibn(input, limit)  // Checks whether input is within +/- limit
```
