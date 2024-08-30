// https://leetcode.com/problems/divide-array-in-sets-of-k-consecutive-numbers/submissions/1369743088/

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */

var isPossibleDivide = function(nums, k) {
    nums.sort((a,b)=>a-b);
    if(k === 1)
        return true;
    let map1 = new Map();
    for(let i = 0; i<nums.length; i++){
        if(map1.has(nums[i])){
            map1.set(nums[i], map1.get(nums[i]) + 1) ;
        } else {
            map1.set(nums[i], 1);
        }
    }
    for(let a of map1.keys()){
        while(map1.get(a) !== undefined && map1.get(a) > 0){
            let key = a;
            let count = k;
            while(count--){
                if(map1.get(key) > 0){
                    map1.set(key, map1.get(key)-1);
                    key +=1;
                } else {
                    return false;
                }
            }
        }       
    }
    return true;
};
// // Failed @42/67
// var isPossibleDivide = function(nums, k) {
//   if(nums.length % k  !== 0 || nums.length/k === 1 )
//       return false;
//   nums.sort((a,b)=>a-b);
//   console.log(nums);
//   if(k === 1)
//       return true;
//   let consecutive = true;
//   for(let i =1; i<nums.length; i++){
//       if((nums.length)%k == 0){
//           if (nums[i] === nums[i-1] || nums[i] === (nums[i-1]+1)){
//               consecutive = true;
//           } else if(nums[i] > (nums[i-1]+1) && (i%k === 0)){
//               consecutive = true;
//           } else {
//               consecutive = false;
//           }
//       } else {
//           consecutive = false;
//       }
//       if(consecutive === false){
//         return false;
//       }
//       console.log(i)
//   }
//   return true;
// };
// console.log(isPossibleDivide([1,2,3,3,4,4,5,6], 4));
console.log(isPossibleDivide([3,2,1,2,3,4,3,4,5,9,10,11], 3));
// console.log(isPossibleDivide([1,,2,3,4], 3));
// console.log(isPossibleDivide([1,1,2,2,3,3], 2));
// console.log(isPossibleDivide([2,3,8,11], 3));
// console.log(isPossibleDivide([2,5,6,8,9,10], 3));

