// https://www.geeksforgeeks.org/problems/merge-two-strings2736/1?page=1&difficulty%5B%5D=-1&category%5B%5D=Strings&sortBy=submissions

class Solution {
  //Function to merge two strings.
  merge(S1, S2)
  {
      //your code here
      let str = '';
      let len1 = S1.length;
      let len2 = S2.length;
      let min = Math.min(len1, len2);
      let i=0;
      while(i < min){
          str += S1[i]+S2[i];
          i++;
      }
      if(len1 === min) {
          str += S2.substring(i);
      } else {
          str += S1.substring(i);
      }
      return str;
  }
}