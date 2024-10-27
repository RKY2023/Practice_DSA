// https://www.interviewbit.com/problems/pairs-with-given-xor/

module.exports = { 
  //param A : array of integers
  //param B : integer
  //return an integer
   solve : function(A, B){
         let count = 0;
         let hm = new Map();
         for(let aa of A){
            if(hm.has(aa)){
             
            } else {
                hm.set(aa, 1);
            }
         }
         for(let [k,v] of hm){
            if(hm.has(k^B)){
                count++;
            }
         }
         return count/2;
   }
 };
 