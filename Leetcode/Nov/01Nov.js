// https://leetcode.com/problems/delete-characters-to-make-fancy-string/?envType=daily-question&envId=2024-11-01

/**
 * @param {string} s
 * @return {string}
 */
var makeFancyString = function(s) {
  let count = 0;
  let res = s[0];
  for(let i=1; i<s.length; i++){
      if(s[i-1] === s[i]){
          count++;
      } else{
          count = 0;
      }
      if(count > 1) {
          continue;
      } else {
          res += s[i];
      }
  }
  return res;
};