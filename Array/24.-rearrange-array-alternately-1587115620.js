// https://www.geeksforgeeks.org/problems/-rearrange-array-alternately-1587115620/1?page=1&difficulty%5B%5D=1&category%5B%5D=Arrays&sortBy=submissions

class Solution {
  //Function to rearrange  the array elements alternately.
  rearrange(arr, n){
      // code here
      let a = [];
      let c = 0;
      for( let i=0; i<n; ){
          if(i%2 ==0) {
              // even
              // swap with last index
              a.push(arr[n-c-1]);
          } else {
              a.push(arr[c]);
              c++;
          }
          i++;
      }
      for( let i=0; i<n; i++ ){
          arr[i] = a[i];
      }
  }
}