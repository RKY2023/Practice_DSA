// https://www.geeksforgeeks.org/problems/min-subsets-with-consecutive-numbers0601/1?page=3&difficulty%5B%5D=0&status%5B%5D=solved&category%5B%5D=Arrays&sortBy=submissions

class Solution {
  // Function to find number of subsets of the given array.
  numOfSubset(arr) {
      // Your code goes here
      let count = 0;
      let res = 1;
      arr = arr.sort((a,b) => a-b);
      for(let i=0; i<arr.length-1; i++) {
          if(arr[i] != arr[i+1]-1){
              res++;
          }
      }
      
      return res;
  }
}