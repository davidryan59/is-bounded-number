/* eslint-disable func-names*/
/* eslint-disable no-unused-vars*/
/* eslint-disable no-console*/

var assert = require('assert');
var ibn = require('../src/index');

var getTimeMS = function () {
  return new Date().getTime();
};

var runTest = function (startAtNumber, totalLoops, maxTimeNanoseconds, testLabel, functionToCall) {
  it(testLabel, function () {
    var exampleOutput = null;
    var startTimeMS = getTimeMS();
    for (var i = startAtNumber; i < startAtNumber + totalLoops; i++) exampleOutput = functionToCall(i);
    var endTimeMS = getTimeMS();
    // console.log(`Example output:`)
    // console.log(exampleOutput)
    var timeInNanoseconds = Math.round((endTimeMS - startTimeMS) * 1000000 / totalLoops);
    console.log(`Average time was ${timeInNanoseconds}ns, tested on ${totalLoops} instances from ${startAtNumber} to ${startAtNumber + totalLoops - 1}, total time ${endTimeMS - startTimeMS}ms.`);
    assert(timeInNanoseconds < maxTimeNanoseconds);
  });
};

describe('Performance of is-bounded-number', function () {
  runTest(2, 3000000, 45, 'average < 45ns (nanoseconds) for ibn(i) where i below limit', function (i) {
    return ibn(i);
  });

  runTest(2, 3000000, 55, 'average < 55ns for ibn(i, 1) where i above limit', function (i) {
    return ibn(i, 1);
  });

  runTest(2, 3000000, 35, 'average < 35ns for ibn(\'\') on invalid input', function (i) {
    return ibn('');
  });
});
