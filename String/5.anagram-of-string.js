// https://www.geeksforgeeks.org/problems/anagram-of-string/1?page=1&difficulty%5B%5D=-1&category%5B%5D=Strings&sortBy=submissions

// class Solution {
function  remAnagram(str1, str2){
      // code here
      // let freq = Array(27).fill(0);
      // for(a of str1) {
      //     freq[a.charCodeAt(0) - 127]++;
      // }
      // for(a of str2) {
      //     freq[a.charCodeAt(0) - 127]--;
      // }
      console.log(Math.abs(str1.length - str2.length))
      return Math.abs(str1.length - str2.length);
  }
// }
let str1 = 'basgadhbfgvhads';
let str2 = 'sjdhgvbjdsbhvbvd';
// ans is 11
remAnagram(str1, str2);

