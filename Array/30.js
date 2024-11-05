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