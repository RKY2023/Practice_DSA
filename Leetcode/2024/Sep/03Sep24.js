/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
// for(let i =0; i<s.length; i++){
//   let ch = s.charCodeAt(i);
//   if(ch >= 97 && ch < 106) {
//       ch = ch - 96;//  j 106 10 
//   } else if(ch >= 106 && ch < 115) {
//       ch = ch - 105;
//   } else if(ch >= 115 && ch < 124) {
//       ch = ch - 114;
//   }
//   let tt = map1.get(ch) || 0;
//   map1.set(ch, tt+1);
// }
var startTime = performance.now();
var getLucky = function(s, k) {
  // alphanumeric -> 10 map
  let map1 = new Map();
  for(let i =0; i<s.length; i++){
      let ch = s.charCodeAt(i);
       ch = ch - 96;
      let tt = map1.get(ch) || 0;
      map1.set(ch, tt+1);
  }
  console.log(map1);
  let numbers = 0;
  for (let [k, v] of  map1){
      if(k>9){
        k = k%10 + Math.floor(k/10);
      }
      numbers += k * v;
  }
  // summation( key * value)[1-9]
  console.log(numbers);
  while(k > 1) {
      let num = numbers;
      let sum = 0;
      while(num > 0){
          sum += num %10;
          num = Math.floor(num/10);
      }
      numbers = sum;
      k--;
  }
  return numbers;
};
function sentence(s){
  let ss = '';
  for(let i =0; i<s.length; i++){
    let ch = s.charCodeAt(i) - 96;
    ss += ch.toString();
  }
  return ss;
}
let s = "zabx";
// console.log(sentence(s));
console.log(getLucky(s, 1));
var endTime = performance.now()
console.log(`${endTime - startTime} ms`);