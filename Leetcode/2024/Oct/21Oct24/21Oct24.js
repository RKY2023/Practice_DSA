// https://leetcode.com/problems/split-a-string-into-the-max-number-of-unique-substrings/editorial/?envType=daily-question&envId=2024-10-21

/**
 * @param {string} s
 * @return {number}
 */
var maxUniqueSplit = function(s) {
  // let set1 = new Set();
  let set1 = [];
  return backtrackSplit(s, 0, set1);
};
var backtrackSplit = function (str, i, set) {
  if(i === str.length){
      return 0;
  }
  let maxSplit = 0;
  for(let j = i + 1; j < str.length; j++) {
      let split = str.substring(i, j-i);
      if(set.find((ss) => split === ss) == set[set.length-1]){
          set.push(split);
          maxSplit = Math.max(maxSplit, 1 + backtrackSplit(str, j, set));
          delete set.filter((s) => s==split );
      }
  }
  return maxSplit;
}