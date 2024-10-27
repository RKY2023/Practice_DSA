// https://www.geeksforgeeks.org/problems/union-of-two-arrays3538/1?page=1&difficulty%5B%5D=-1&category%5B%5D=Hash&sortBy=submissions

class Solution {
  // Function to return the count of number of elements in the union of two arrays.
  findUnion(a, b) {
      // code here
      let count = 0;
      let arrSet = new Set();
      for(let aa of a) {
          if(!arrSet.has(aa)){
              count++;
              arrSet.add(aa);
          }
      }
      for(let bb of b) {
          if(!arrSet.has(bb)){
              count++;
              arrSet.add(bb);
          }
      }
      return count;
  }
}

