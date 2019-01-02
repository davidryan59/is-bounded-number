var assert = require('assert')
var ibn = require('./isBoundedNumber')

describe("isBoundedNumber", function() {

  var runTest = function(input, expectedResult, optionalBound, optionalComment) {
    var actualResult = (optionalBound) ? ibn(input, optionalBound) : ibn(input)
    var boundText = (optionalBound) ? ", " + optionalBound : ""
    var commentText = (optionalComment) ? ", " + optionalComment : ""
    var label = "isBoundedNumber(" + JSON.stringify(input) + boundText + ") = " + expectedResult + commentText
    it(label, function() {
      assert.strictEqual(actualResult, expectedResult)
    })
  }

  var testArray = [
    [0, true]
  , [-0, true, null, "This is -0"]
  , [1, true]
  , [42.001011, true]
  , [-172738, true]
  , [-1/7070707077, true]
  , [1e15, true]
  , [-1e15, true]
  , [1e15+1, false]
  , [-1e15-1, false]
  , [1e20, false]
  , ['aString', false]
  , [Infinity, false]
  , [0-Infinity, false]
  , [NaN, false]
  , [0-NaN, false]
  , [null, false]
  , [true, false]
  , [undefined, false]
  , [[1, 2, 3], false]
  , ["1", false]
  , [{1:2}, false]
  , [1000, true, 1e6]
  , [1e6, false, 1000]
  ]

  for (var i=0; i<testArray.length; i++) {
    runTest(testArray[i][0], testArray[i][1], testArray[i][2], testArray[i][3])
  }

})
