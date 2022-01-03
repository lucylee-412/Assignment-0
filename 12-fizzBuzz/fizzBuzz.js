function fizzBuzz(start, end) {
  let fb = [];
  
  let i = start;
  while (i <= end) {
    if ((i % 3 == 0) && (i % 5 == 0)) {
        fb.push("FizzBuzz");
    } else if (i % 5 == 0) {
      fb.push("Buzz");
    } else if (i % 3 == 0) {
      fb.push("Fizz");
    } else {
      fb.push(i);
    }
    
    i++;
  }
  
  return fb;
}

// Do not edit this line;
module.exports = fizzBuzz;