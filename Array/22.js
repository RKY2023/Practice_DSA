// class Solution {
//   // Function to find number of subsets of the given array.
//   numOfSubset(arr) {
//       // Your code goes here
//       let sortedArr = arr.sort((a, b) => a-b);
//       let temp = [];
//       let res = [];
//       for(let i of sortedArr){
//           temp.push(i);
          
//           if(temp.length === 3) {
//               res.push(temp);
//               temp = [];
//           }
//       }
//       return res;
//   }
// }
// let arr = [100, 56, 5, 6, 102, 58, 101, 57, 7, 103];
// let tt = new Solution();
// let kk = tt.numOfSubset(arr);
// console.log(kk);


let a = new Set();
a.add(2);
a.add(1);
console.log(a);