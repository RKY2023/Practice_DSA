/**
 * @param {number[]} nums
 * @return {number}
 */
// var minimumMountainRemovals = function(nums) {
//   let count = 0;
//   // find max & store max Idx
//   let mins = [];
//   let min = Infinity;
//   let max = 0;
//   let maxIdx = 0;
//   for(let i =0; i< nums.length; i++ ) {
//       if(nums[i] > max){
//           max = nums[i];
//           maxIdx = i;
//       }
//       if(nums[i] < min){
//           min = nums[i];
//           mins.push(i);
//       }
//   }

//   // longest subsequence
//   let prev = nums[0];
//   for(let i = 1; i < maxIdx; i++){
//     if(nums[i] > prev){
//       prev = nums[i];
//     } else{
//       count++;
//     }
//   }
//   console.log(count)
//   prev = nums[maxIdx];
//   for(let i = maxIdx+1; i < nums.length; i++){
//     if(nums[i] < prev){
//       prev = nums[i];
//     } else{
//       count++;
//     }
//   }
//   return count;
// }

var minimumMountainRemovals = function(nums) {
  let LIS = [];
  let LDS = [];

  for(let i =0; i< nums.length; i++ ) {
    LIS[i] = 1;
    LDS[i] = 1;
  }
  for(let i =0; i< nums.length; i++ ) {
    for(let j =0; j < i; j++ ) {
      if(nums[i] > nums[j]){
          LIS[i] = Math.max(LIS[i], LIS[j] + 1);
      }
    }
    // console.log(LIS)
  }
  for(let i = nums.length -1 ; i >= 0; i-- ) {
    for(let j = nums.length -1; j > i; j-- ) {
      if(nums[i] > nums[j]){
          LDS[i] = Math.max(LDS[i], LDS[j] + 1);
      }
    }
  }
  // console.log(LIS, LDS);
  let maxMountainLength = 0;
  for(let i = 1; i< nums.length -1; i++ ) {
    if(LIS[i] > 1 && LDS[i] > 1){
      maxMountainLength = Math.max(maxMountainLength, LIS[i] + LDS[i] -1);
    }
  }

  return nums.length - maxMountainLength;
}

let TC = [
  // [1,3,1],
  [2,1,1,5,6,2,3,1],
  // [9,8,1,7,6,5,4,3,2,1]
]
let nums = [1,3,1]
// let nums = [2,1,1,5,6,2,3,1]
for(let ts in TC){
  console.log('', ts, minimumMountainRemovals(TC[ts]));
}