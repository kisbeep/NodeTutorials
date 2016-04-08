var assert = require('assert');
var coolNo = require(process.argv[2]);

assert.ok(coolNo(42), 'Broken');

// http://nodejs.org/api/assert.html

// assert.ok(value, message) test if value is truthy
// assert.equal(actual, expected, message) test if actual == expected
// assert.notEqual(actual, expected, message) !=
// assert.deepEqual(actual, expected, message)  compare objects
// assert.notDeepEqual(actual, expected, message) !=
// assert.strictEqual(actual, expected, message) ===
// assert.notStrictEqual(actual, expected, message) !===
