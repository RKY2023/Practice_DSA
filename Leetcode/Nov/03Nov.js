// https://leetcode.com/problems/rotate-string/?envType=daily-question&envId=2024-11-03

/**
 * @param {string} s
 * @param {string} goal
 * @return {boolean}
 */
var rotateString = function(s, goal) {
  if(s.length != goal.length) {
      return false;
  }
  s +=s;
  return s.search(goal) >=0 ? true: false;
};
