function pairSum(nums, target) {
  if (nums.length <= 1) {
    throw "Provided array does not contain enough distinct numbers";
  }

  let sums = [];

  for (var i in nums) {
    let j = nums.length - 1;
    while (j != i) {
      sums.push(nums[i] + nums[j])
      j--
    }
  }

  return (sums.includes(target))
}

// Do not edit this line;
module.exports = pairSum;