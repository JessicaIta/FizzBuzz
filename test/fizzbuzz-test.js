var assert = require('assert');
var f = require('../src/fuzzbuzz.js');

describe('FizzBuzz', function () {

    it('should return [1] when call #FizzBuzz([1])', function () {
        assert.deepEqual(f.FizzBuzz([1]), [1], 'should return the same array because there\'s no number divisible by 3 or 5 or both');
    });

    it('should return ["Fizz"] when call #FizzBuzz([3])', function () {
        assert.deepEqual(f.FizzBuzz([3]), ["Fizz"], 'should return ["Fizz"] because the number is divisible by 3');
    });

    it('should return ["Buzz"] when call #FizzBuzz([5])', function () {
        assert.deepEqual(f.FizzBuzz([5]), ["Buzz"], "should return Buzz because the number is divisible by 5");
    });

    it('should return ["FizzBuzz"] when call #FizzBuzz([15])', function () {
        assert.deepEqual(f.FizzBuzz([1500]), ["FizzBuzz"], 'should return ["FizzBuzz"] because the number is divisible by both 3 and 5')
    });

    it('should return [1,"Fizz","Buzz", 7, "FizzBuzz"] when call #FizzBuzz([1, 6, 10, 7, 30])', function () {
        assert.deepEqual(f.FizzBuzz([1, 6, 10, 7, 30]), [1, "Fizz", "Buzz", 7, "FizzBuzz"], 'should return an array of mixed values')
    });
});
