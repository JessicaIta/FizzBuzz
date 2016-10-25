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

  var result = [];
  for (var i = 0; i < numbers.length; i++) {
    result.push(toFizzBuzz(numbers[i]));
  }
  return result;
}

exports.FizzBuzz = FizzBuzz;
