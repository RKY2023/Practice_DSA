// https://leetcode.com/problems/string-compression-iii/?envType=daily-question&envId=2024-11-04

/**
 * @param {string} word
 * @return {string}
 */
var compressedString = function(word) {
  let comp = "";
  let n = word.length;
  for(let i = 0; i < n; ) {
      let char = word[i];
      let k = i + 9;
      let length = 0; 
      while(i < n && i < k && word[i] == char) {
          length += 1;
          i += 1;
      }
      comp += String(length) + char;
  }
  return comp;
};

/**
 * @param {string} word
 * @return {string}
 */
var compressedString = function(word) {
  let count = 1;
  let comp = '';
  let prevChar = false;
  if(word.length === 1){
      return '1'+word[0];
  }
  for(let i = 0; i<word.length-1; i++){
      if(word[i] === word[i+1]){
          count++;
          if(count === 9){
              comp += count.toString() + word[i];
              count = 1;
              if(word[i] === word[i+1]){
                  i++;
                  if(i===word.length-1)
                  prevChar = true;
              }
          }
      } else if(count > 0){
          comp += count.toString() + word[i];
          count = 1;                    
      }
  }
  if(!prevChar)
  comp += count.toString() + word[word.length-1];
  return comp;
};