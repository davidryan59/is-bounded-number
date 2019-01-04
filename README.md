# is-bounded-number

[![npm version](https://badge.fury.io/js/is-bounded-number.png)](https://badge.fury.io/js/is-bounded-number)

Checks that a number is numeric, finite, and within a specific range (default is +/- 1e15). Find [module on npm](https://www.npmjs.com/package/is-bounded-number) and [repo on GitHub](https://github.com/davidryan59/is-bounded-number).

## API
``` js
var ibn = require('is-bounded-number');
ibn(input);          // Returns boolean. Checks input numeric and bounded by +/- 1e15
ibn(input, bound);   // Returns boolean
```

Use `npm i is-bounded-number` to install. For full examples see GitHub `examples` directory.
