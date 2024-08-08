// https://www.geeksforgeeks.org/problems/sort-an-array-of-0s-1s-and-2s4231/1?page=1&difficulty%5B%5D=0&category%5B%5D=Arrays&sortBy=submissions

class Solution {
    
  sort012(arr, N)
  {
      //your code here
      // return arr.sort((a, b) => a-b);
      let zeroes = 0;
      let ones = 0;
      let twos = 0;
      for(let a of arr) {
          if(a == 0) {
              zeroes++;
          } else if(a == 1) {
              ones++;
          } else if(a == 2) {
              twos++;
          }
      }
      let i =0;
      while(zeroes-- > 0) {
          arr[i] = 0;
          i++;
      }
      while(ones-- > 0) {
          arr[i] = 1;
          i++;
      }
      while(twos-- > 0) {
          arr[i] = 2;
          i++;
      }
      return arr;
  }
}