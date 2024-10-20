/**
 * @param {number} n
 * @param {number} k
 * @return {character}
 */
var findKthBit = function(n, k) {
  let s1 = '0';
  function genStr(s, n) {
      if(n === 0){
          return s;
      }
      let inv = '';
      for(let a in s) {
          inv = (s[a] ^ 1).toString() + inv;
      }
      let ns = s+"1"+inv;
      // console.log(ns);
      return genStr(ns, n-1);
  }
  s1 = genStr(s1, n);
  return s1[k-1];
};

// console.log(findKthBit(4,1));
console.log(findKthBit(4,11));