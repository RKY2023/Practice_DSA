// https://leetcode.com/problems/arithmetic-subarrays/

/**
 * @param {number[]} nums
 * @param {number[]} l
 * @param {number[]} r
 * @return {boolean[]}
 */
var checkArithmeticSubarrays = function(nums, l, r) {
  let res = [];
  for(let i=0; i<l.length; i++){
      let arr = [];
      let idx = l[i];
      while(idx<=r[i]){
          arr.push(nums[idx]);
          idx++;
      }
      arr.sort((a,b) => a-b);
      res.push(checkArithmetic(arr));
  }
  return res;
};
var checkArithmetic = function (arr){
  let d = arr[0] - arr[1];
  let isArith = true;
  for(let j = 1; j < arr.length -1; j++){
      if(arr[j] - arr[j+1] != d) {
          isArith = false;
          break;
      }
  }
  return isArith;
}