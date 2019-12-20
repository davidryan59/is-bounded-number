# is-bounded-number

[![npm version](https://badge.fury.io/js/is-bounded-number.svg)](https://badge.fury.io/js/is-bounded-number)
[![Downloads per month](https://img.shields.io/npm/dy/is-bounded-number.svg?maxAge=31536000)](https://github.com/davidryan59/is-bounded-number)
[![Build status](https://travis-ci.org/davidryan59/is-bounded-number.svg?master)](https://travis-ci.org/davidryan59)


Checks that a number is numeric, finite, and within a specific range (default is +/- 1e15). Find [module on npm](https://www.npmjs.com/package/is-bounded-number) and [code repo with examples on GitHub](https://github.com/davidryan59/is-bounded-number).

## API
``` js
var ibn = require('is-bounded-number');
ibn(input);          // Returns boolean. Checks input numeric and bounded by +/- 1e15
ibn(input, bound);   // Returns boolean
```

Use `npm i is-bounded-number` to install. For full examples see GitHub `examples` directory.
