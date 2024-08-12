// https://www.geeksforgeeks.org/problems/rearrange-an-array-with-o1-extra-space3142/1?page=2&difficulty%5B%5D=1&category%5B%5D=Arrays&sortBy=submissions
 
class Solution {
    
  //Function to rearrange an array so that arr[i] becomes arr[arr[i]]
  //with O(1) extra space.
  arrange(arr, n){
      // code here
      let i = 0;
      let maxElement = Math.max(...arr) + 1;
      while(i < n) {
          let val = arr[arr[i]] % maxElement;
          arr[i] += val * maxElement; 
          i++;
      }
      for(let j=0; j<arr.length; j++) {
          arr[j] = Math.floor(arr[j]/maxElement);
      }
      return arr;
  }
}


// Solution 2 (Bad dont use violets rule space O(1))
class Solution {
    
  //Function to rearrange an array so that arr[i] becomes arr[arr[i]]
  //with O(1) extra space.
  arrange(arr, n){
      // code here
      let i = 0;
      let val = [];
      while(i < n) {
          val[i] = arr[arr[i]];
          i++;
      }
      for(let j=0; j<arr.length; j++) {
          arr[j] = val[j];
      }
      return arr;
  }
}