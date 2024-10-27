// https://www.interviewbit.com/problems/diffk-ii/

module.exports = { 
  //param A : array of integers
  //param B : integer
  //return an integer
   diffPossible : function(A, B){
         let m = new Map();
         let count = 0;
     if(A.length === 1){
       return 0;
     }
     for(let i=0; i<A.length; i++) {
       if(m.has(A[i])){
         m.set(A[i], m.get(A[i])+1);
       } else {
         m.set(A[i], 1);
       }
     }
     for(let a of A) {
       let c = B + a;
       if(m.has(c)){
         count += m.get(a)*m.get(c);
       }
     }
     return count;
   }
 };