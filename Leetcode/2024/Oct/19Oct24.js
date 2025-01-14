// https://leetcode.com/problems/find-kth-bit-in-nth-binary-string/description/?envType=daily-question&envId=2024-10-19

/**
 * @param {number} n
 * @param {number} k
 * @return {character}
 */
var findKthBit = function(n, k) {
  let S  = '0';
  function genStr(str, n) {
      if(n === 0){
          return str;
      }
      let inv = '';
      for(let s of str) {
          inv = (s ^ 1).toString() + inv;
      }
      let newStr = str+"1"+inv;
      return genStr(newStr, n-1);
  }
  S = genStr(S, n);
  return S[k-1];
};