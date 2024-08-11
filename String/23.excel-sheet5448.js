// https://www.geeksforgeeks.org/problems/excel-sheet5448/1?page=2&difficulty%5B%5D=1&category%5B%5D=Strings&sortBy=submissions

class Solution {
  ExcelColumn(n){
      // code here
      let ret = '';
      let a = 1;
      let b = 26;
  
      while ((n -= a) >= 0) {
          const charCode = parseInt((n % b) / a) + 65;
          ret = String.fromCharCode(charCode) + ret;
          a = b;
          b *= 26;
      }
      return ret;
  }
}
