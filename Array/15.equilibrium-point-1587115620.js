https://www.geeksforgeeks.org/problems/equilibrium-point-1587115620/1?page=1&difficulty%5B%5D=0&category%5B%5D=Arrays&sortBy=submissions

class Solution {
  // Function to find equilibrium point in the array.
  equilibriumPoint(arr) {
      // your code here
      let left = -1;
      let right = arr.length -1;
      let leftSum = 0;
      let rightSum = arr[right];
      if(arr.length === 1)
          return 1;
      
      while( left < right) {
          if(leftSum === rightSum && (left+2) === right ){
              return left+2;
          } else if(leftSum === rightSum && (left+1) === right) {
              return -1;
          } else if(leftSum < rightSum) {
              left++;
              leftSum += arr[left];
          } else {
              right--;
              rightSum +=arr[right];
          }
      }
      return -1;
  }
}