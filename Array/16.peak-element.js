// https://www.geeksforgeeks.org/problems/peak-element/1?page=1&difficulty%5B%5D=0&category%5B%5D=Arrays&sortBy=submissions


class Solution {
    
  peakElement(arr, n)
  {
      // code here
      let left = 0;
      let right = n-1;
      while(left < right) {
          let mid = Math.floor((left + right)/2);
          if(arr[mid] > arr[mid+1]) {
              right = mid;
          } else {
              left = mid+1;
          }
      }
      return left;
  }
}

// if(n == 0) return -1;
//        if(n == 1) return 0;
//        if(n == 2) arr[0]>=arr[1]?0:1;
       
//        if(arr[0]>=arr[1]) return 0;
//        if(arr[n-1]>=arr[n-2]) return n-1;
       
//        for(let i=1;i<n;i++){
//            if(arr[i-1]<=arr[i] && arr[i]>=arr[i+1]){
//                return i;
//            }
//        }