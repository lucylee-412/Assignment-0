function sumOfMinimumAndMaximum(nums) {
  // Source: https://stackoverflow.com/a/8934913
  const min = Math.min.apply(Math, nums)
  const max = Math.max.apply(Math, nums)

  const sum = min + max
  
  return sum
}

// Do not edit this line;
module.exports = sumOfMinimumAndMaximum;