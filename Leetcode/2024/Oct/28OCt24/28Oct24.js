// https://leetcode.com/problems/longest-square-streak-in-an-array/?envType=daily-question&envId=2024-10-28

/**
 * @param {number[]} nums
 * @return {number}
 */
var longestSquareStreak = function(nums) {
  // init longest streak[ls]
  let ls = 0;
  // crate hm & make min max
  let min, max;
  let hm = new Map();
  for(let a of nums) {
      hm.set(a, 1);
  }
  // loop & check seq is present
  for(let a of nums) {
      let streak = 0;
      let n = a;
      while(hm.has(n)){
          streak++;
          n = n*n;
          if(streak > ls) {
              ls = streak;
          }
      }
  }
  // returm ls (>1) else -1
  if(ls > 1) {
      return ls;
  } else{
      return -1;
  }
};