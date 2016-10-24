var assert = require('assert');
var f = require('../src/fuzzbuzz.js');

describe('FizzBuzz', function() {

  it('should return [1] when call #FizzBuzz([1])', function() {
      assert.deepEqual([1], f.FizzBuzz([1]), "should return the same array because there's no number divible by 3 or 5 or both");
  });

  
});
