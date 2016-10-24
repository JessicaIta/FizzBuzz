function FizzBuzz(numbers) {
  var result = [];
  for(var i = 0; i < numbers.length; i++) {
    if (numbers[i]%3 === 0){
      result.push("Fizz");
    }else{
      result.push(numbers[i]);
    }
  }
  return result;
}

exports.FizzBuzz = FizzBuzz;
