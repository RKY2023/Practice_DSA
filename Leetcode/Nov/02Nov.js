// https://leetcode.com/problems/circular-sentence/?envType=daily-question&envId=2024-11-02

/**
 * @param {string} sentence
 * @return {boolean}
 */
var isCircularSentence = function(sentence) {
  if(sentence[0] !== sentence[sentence.length -1]){
      return false;
  }
  let words = sentence.split(' ');
  let lastChar = words[0][words[0].length-1];
  for(let i =1; i<words.length; i++){
      if(words[i][0] !== lastChar){
          return false;
      }
      lastChar = words[i][words[i].length-1];
  }
  return true;
};