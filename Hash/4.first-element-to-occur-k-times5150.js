// https://www.geeksforgeeks.org/problems/first-element-to-occur-k-times5150/1?page=1&difficulty%5B%5D=-1&category%5B%5D=Hash&sortBy=submissions

class Solution{
  firstElementKTime(n, k, arr){
      //code here
      let hm = new Map();
      for(let a of arr){
          if(hm.has(a)){
              let newVal = hm.get(a)+1;
              if(newVal === k){
                   return a;
              }
              hm.set(a, newVal);
          } else {
              hm.set(a, 1);
          }
      }
      return -1;
  }
}

