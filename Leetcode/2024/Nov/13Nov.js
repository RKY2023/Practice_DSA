// https://leetcode.com/problems/count-the-number-of-fair-pairs/?envType=daily-question&envId=2024-11-13

/**
 * @param {number[]} nums
 * @param {number} lower
 * @param {number} upper
 * @return {number}
 */
var countFairPairs = function(nums, lower, upper) {
  let count = 0;
  nums.sort((a,b) => a-b);
  
  for(let i=0; i < nums.length-1; i++){
      let minVal = lower - nums[i];
      let maxVal = upper - nums[i];

      // Find the lower bound for the range
      let start = lowerBound(nums, minVal, i+1);
      let end = upperBound(nums, maxVal, i+1);
      count += (end-start);
  }
  return count;
};
var upperBound = function (arr, target, start) {
    let l = start;
    let h = arr.length;
    let m ;
    while(l < h) {
        m = Math.floor(l + (h-l) / 2);
        if(arr[m] <= target) {
            l = m + 1;
        } else{
            h = m;
        }
    }
    return l;
}
var lowerBound = function (arr, target, start) {
    let l = start;
    let h = arr.length;
    let m ;
    while(l < h) {
        m = Math.floor(l + (h-l) / 2);
        if(arr[m] < target) {
            l = m + 1;
        } else{
            h = m;
        }
    }
    return l;
}
