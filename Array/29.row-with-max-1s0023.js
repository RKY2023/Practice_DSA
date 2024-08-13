// https://www.geeksforgeeks.org/problems/row-with-max-1s0023/1


class Solution {
  /**
  * @param number[] a
  * @param number[][] arr

  * @returns number
  */
  rowWithMax1s(arr) {
      // code here
      let max1s = 0;
      let index = -1;
      for( let i =0; i<arr.length; i++) {
          let count = 0;
          for( let j = arr[i].length-1; j >= 0; j--) {
              if(arr[i][j] !== 1){
                  break;
              }
              count++;
          }
          if(count > max1s){
              max1s= count;
              index = i;
          }
      }
      return index;
  }
}

// class Solution {
//   /**
//   * @param number[] a
//   * @param number[][] arr

//   * @returns number
//   */
//   rowWithMax1s(arr) {
//       // code here
//       let max = -1;
//       let maxCount = 0;
//       for(let i=0; i<arr.length; i++) {
//           let lo = 0, hi = arr[i].length - 1;
//           while(lo<=hi) {
//               let mid = Math.floor((lo+hi)/2);
//               if(arr[i][mid] == 0) {
//                   lo = mid + 1;
//               }   else {
//                   hi = mid - 1;
//               }
//           }
          
//           if(maxCount < arr[i].length - lo) {
//               maxCount = arr[i].length - lo;
//               max = i;
//           }
//       }
//       return max;
//   }
// }

// class Solution {
//   /**
//   * @param number[] a
//   * @param number[][] arr

//   * @returns number
//   */
//    lowerBond(arr, num){
//       let low = 0;
//       let high = arr.length - 1;
//       let ans = arr.length;
//       while(low <= high){
//           let mid = Math.floor((low + high) / 2);
//           if(arr[mid] >= num){
//               ans = mid;
//               high = mid - 1;
//           }
//           else
//               low = mid + 1;
//       }
//       return ans;
// }

//   rowWithMax1s(arr) {
//       // code here
//       let maxCount = 0;
//       let index = -1;
//       for(let i = 0; i < arr.length; i++){
//           let count = arr[i].length - this.lowerBond(arr[i], 1);
//           if(count > maxCount){
//               maxCount = count;
//               index = i;
//           }
//       }
//       return index;
//   }
// }

