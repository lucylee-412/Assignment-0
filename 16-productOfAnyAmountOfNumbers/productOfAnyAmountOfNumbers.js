function productOfAnyAmountOfNumbers(...args) {
  return args.reduce((previous, current) => {
    return previous * current;
  });
}

// Do not edit this line;
module.exports = productOfAnyAmountOfNumbers;