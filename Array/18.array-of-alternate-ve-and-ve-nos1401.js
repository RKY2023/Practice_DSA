// https://www.geeksforgeeks.org/problems/array-of-alternate-ve-and-ve-nos1401/1?page=2&difficulty%5B%5D=0&category%5B%5D=Arrays&sortBy=submissions

class Solution{
  rearrange(arr,n){
      //code here
      let pos = [];
      let neg = [];
      for(let i=0; i<arr.length; i++) {
          if(arr[i] < 0 ) {
              neg.push(arr[i]);
          }
          if(arr[i] >= 0) {
              pos.push(arr[i]);
          }
      }
      let narr = [];
      let negIdx = 0;
      let posIdx = 0;
      for(let i=0; i<arr.length; ) {
          if(posIdx < pos.length)
          narr[i++] = pos[posIdx++];
          if(negIdx < neg.length)
          narr[i++] = neg[negIdx++];    
      }
      return narr;
  }
}