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

 
class Solution {
    //Function to rearrange  the array elements alternately.
    rearrange(arr, n){
        // code here
        let maxIdx = n - 1; // Pointer for the max value (end of array)
        let minIdx = 0;     // Pointer for the min value (start of array)
        
        // Use a temporary variable to store the maximum element
        const maxElement = arr[n - 1] + 1; 
    
        // Traverse the array and rearrange elements
        for (let i = 0; i < n; i++) {
            if (i % 2 === 0) {
                // For even index: put the maximum element
                arr[i] += (arr[maxIdx] % maxElement) * maxElement;
                maxIdx--;
            } else {
                // For odd index: put the minimum element
                arr[i] += (arr[minIdx] % maxElement) * maxElement;
                minIdx++;
            }
        }
    
        // Decode the array to get the final rearranged result
        for (let i = 0; i < n; i++) {
            arr[i] = Math.floor(arr[i] / maxElement);
            }
    }
}