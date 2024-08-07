// https://www.geeksforgeeks.org/problems/remove-duplicate-elements-from-sorted-array/1?page=1&difficulty%5B%5D=0&category%5B%5D=Arrays&sortBy=submissions

class Solution {
  // Function to remove duplicates from the given array.
  remove_duplicate(arr) {
      // Code Here
      let k=0;
      for(let i=0;i<arr.length-1;i++)
      {
          if(arr[i]!==arr[i+1])
          {
              arr[k++]=arr[i]
          }
      }
      arr[k++]=arr[arr.length-1];
      return k;
  }
}