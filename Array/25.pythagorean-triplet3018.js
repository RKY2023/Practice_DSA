// https://www.geeksforgeeks.org/problems/pythagorean-triplet3018/1?page=2&difficulty%5B%5D=1&category%5B%5D=Arrays&sortBy=submissions

class Solution {

  checkTriplet(arr,n){
      //code here
      const squares = new Set(arr.map(num => num * num));
      for (let a of squares) {
          for (let b of squares) {
              if (squares.has(a + b)) {
                  return true; // Found a Pythagorean triplet
              }
          }
      }
      return false;

        // arr = arr.map((num) => num * num);
        // arr.sort((a,b) => a-b);
        // for(let i= n-1; i >= 2; i--) {
        //     let left = 0;
        //     let right = i - 1;
        //     while(left < right) {
        //         const sum = arr[left] + arr[right];
        //         if(sum === arr[i]){
        //             return true;
        //         } else if(sum < arr[i]) {
        //             left++;
        //         } else {
        //             right--;
        //         }
        //     }
        // }
      // ANother SOlution
      // arr = arr.map((num) => num * num);
      // arr.sort((a,b) => a-b);
      // for(let i= n-1; i >= 2; i--) {
      //     let left = 0;
      //     let right = i - 1;
      //     while(left < right) {
      //         const sum = arr[left] + arr[right];
      //         if(sum === arr[i]){
      //             return true;
      //         } else if(sum < arr[i]) {
      //             left++;
      //         } else {
      //             right--;
      //         }
      //     }
      // }
      return false;
  }
  
}

// class Solution {
//   checkTriplet(arr,n){
//       //code here
//       for( let a of arr) {
//           for( let b of arr) {
//               if(a !== b) {
//                   let c = Math.sqrt(Math.pow(a,2)+Math.pow(b,2));
//                   let res = this.finder(arr, c);
//                   if(res >= 0){
//                       return true;
//                   }
//               }
//           }
//       }
//       return false;
//   }
//   finder (arr, c) {
//       return arr.findIndex((i) => c==i);
//   }
// }