// https://www.geeksforgeeks.org/problems/reverse-a-string/1?page=1&difficulty%5B%5D=-1&category%5B%5D=Strings&sortBy=submissions

class Solution {
    
  reverseWord(str){
      //Your code here
      let i = str.length;
      return this.rev(str, i-1);
  }
  
  rev(str, i) {
      if(i<0)
          return "";
      return str[i]+this.rev(str, i-1);
  }
}
// DP uses recursion, which requires more memory in the call stack, and leads to a stack overflow condition in the runtime.
class Solution {
    
  reverseWord(str){
      //Your code here
      let LEN = str.length;
      let revStr = '';
      for( let i = LEN-1; i >= 0; i-- ) {
          revStr += str[i];
      }
      return revStr;
  }
}
