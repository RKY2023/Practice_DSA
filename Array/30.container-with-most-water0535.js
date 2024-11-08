// https://www.geeksforgeeks.org/problems/container-with-most-water0535/1?page=4&difficulty%5B%5D=1&category%5B%5D=Arrays&sortBy=submissions


/**
 * @param {number[]} arr
 * @returns {number}
 */

class Solution {
  maxArea(arr) {
      // code here
      let area = 0;
      let i = 0;
      let j = arr.length -1;
      while(i < j) {
          let h = Math.min(arr[i], arr[j]);
          area = Math.max(area , h*(Math.abs(i-j)));
          if(arr[i] < arr[j]){
              i++;
          } else {
              j--;
          }
      }
      return area;
  }
}
