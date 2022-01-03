class MySolution {
  constructor() {
    this.flag = false; // this is optional to use;
  }

  binarySearch(nums, target) {
    let mid = Math.floor((nums.length / 2))
    let newNums = [];
    
    if (nums[mid] === target) {
      return true;
    } 
    
    if (nums[mid] < target){
      newNums = nums.slice(0, mid);
      return this.binarySearch(newNums, target);
    } 
    
    if (nums[mid] > target) {
      newNums = nums.slice(mid + 1, nums.length);
      return this.binarySearch(newNums, target);
    }

    return false;
    
  }
}

// Do not edit this line;
let StudentSolution = MySolution;
module.exports = StudentSolution;