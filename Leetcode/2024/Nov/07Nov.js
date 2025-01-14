// https://leetcode.com/problems/largest-combination-with-bitwise-and-greater-than-zero/?envType=daily-question&envId=2024-11-07

/**
 * @param {number[]} candidates
 * @return {number}
 */
var largestCombination = function(candidates) {
  // find largest element 'L' then find close no to 'L' in 2^n' form
  let max = Math.max(...candidates);
  // make hashmap of 2^n in n decreasing 
  let hm = new Map();
  // interate to hm to find max vlaue return max val
  for(let i=1; i<= max; i = i << 1 ){
      for(let c of candidates) {
          let k = c & i;
          if(i === k) {
              if(hm.has(i)) {
                  hm.set(i, hm.get(i) + 1);
              } else {
                  hm.set(i, 1);
              }
          }
      }
  }
  let maxVal = 0;
  for(let [k, v] of hm) {
      if(v > maxVal) {
          maxVal = v;
      }
  }
  return maxVal;
};