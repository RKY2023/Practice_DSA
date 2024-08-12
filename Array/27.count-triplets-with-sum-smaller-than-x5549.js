// https://www.geeksforgeeks.org/problems/count-triplets-with-sum-smaller-than-x5549/1?page=2&difficulty%5B%5D=1&category%5B%5D=Arrays&sortBy=submissions

class Solution {

  countTriplets(arr,n,sum){
      //code here
      arr.sort((a,b)=>a-b);
      let count = 0
      for(let i=0 ;i<n-2 ;i++){
          let k=n-1;
          let j= i+1;
          while(j<k){
              if(arr[i]+arr[j]+arr[k] < sum){
                  count += k-j;
                  j++;
              }else{
                  k--;
              }
          }
      }
      return count;
  }
}