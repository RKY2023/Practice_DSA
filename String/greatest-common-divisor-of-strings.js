// https://leetcode.com/problems/greatest-common-divisor-of-strings/solutions/4920455/95-better-no-slice-no-recursion-basic-math-commented-solution/?envType=study-plan-v2&envId=leetcode-75
/**
 * @param {string} str1
 * @param {string} str2
 * @return {string}
 */
var gcdOfStrings = function(str1, str2) {
  if (str1 + str2 !== str2 + str1) return '';
  let a = str1.length
  let b = str2.length

  // loop (divide) until you find the 
  // highest common factor (length of string) 
  // like we did in maths
  while (b) {
      let temp = b
      b = a % b
      a = temp
  }
  return str1.substring(0, a)
};