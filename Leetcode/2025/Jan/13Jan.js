// https://leetcode.com/problems/minimum-length-of-string-after-operations/?envType=daily-question&envId=2025-01-13\

/**
 * @param {string} s
 * @return {number}
 */
// var minimumLength = function(s) {
//   let hm = new Map();
//   let count = s.length;
//   for(let a of s){
//       if(hm.has(a)){
//           hm.set(a, hm.get(a)+1);
//           if(hm.get(a) >= 3){
//               count-= 2;
//               hm.set(a, hm.get(a)-2);
//           }
//       } else {
//           hm.set(a, 1);
//       }
//   }
//   return count;
// };

var minimumLength = function(s) {
  
let hm = new Map();
let count = 0;
for(let a of s){
    if(hm.has(a)){
        hm.set(a, hm.get(a)+1);
        // if(hm.get(a) >= 3){
        //     count-= 2;
        //     hm.set(a, hm.get(a)-2);
        // }
    } else {
        hm.set(a, 1);
    }
  }
for(let v of hm.values()){
    // console.log(v)
    count += v % 2 == 0 ? 2:1;
}
return count;

};

// Test Cases
let arr = [
  "abaacbcbb",
  "aa",
  "ggggfhhfuhjsjiksjsjs",
  "ggggfhhfuhjsjiksjsjs",
  "fffdhsylokalskhgdfkajlskaldskjf",
  "ecdxxxxhhhhhhhhhhhhhhbbfgfujjiisssjsjjs",
  "imjustmakeingsomthing",
  "ucvbutgkohgbcobqeyqwppbxqoynxeuuzouyvmydfhrprdbuzwqebwuiejoxsxdhbmuaiscalnteocghnlisxxawxgcjloevrdcj"
]
for (let i=0; i<arr.length; i++){
  console.log('case ',i,'=>',minimumLength(arr[i]));
}