// https://www.interviewbit.com/problems/longest-substring-without-repeat/

module.exports = { 
  //param A : string
  //return an integer
   lengthOfLongestSubstring : function(A){
         let count = 0;
         let max = 0;
         let s = new Set();
         for(let a of A){
             if(!s.has(a)){
                 s.add(a);
                 count++;
                 if(count > max){
                     max = count;
                 }
             } else {
                 count = 0;
             }
         }
         return max;
   }
 };
 