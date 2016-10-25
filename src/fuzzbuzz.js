var _ = require('underscore');

function FizzBuzz(numbers) {

  var toFizzBuzz = function (number) {
    
    if (number % 15 === 0) {
      return 'FizzBuzz';
    }
    
    if (number % 3 === 0) {
      return 'Fizz';
    }
    
    if (number % 5 === 0) {
      return 'Buzz';
    }
    
    return number;
  };

  return _.map(numbers, toFizzBuzz);
}

exports.FizzBuzz = FizzBuzz;
