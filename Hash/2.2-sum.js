// https://www.interviewbit.com/problems/2-sum/

module.exports = { 
  //param A : array of integers
  //param B : integer
  //return a array of integers
   twoSum : function(A, B){
         let map1 = new Map();
         for(let i=0; i < A.length; i++){
             for(let j=i+1; j < A.length; j++) {
                 if(A[i]+A[j] === B){
                     if(map1.has(j)) {
                         if(map1.get(j) > i) {
                             map1.set(j, i);
                         }
                     } else {
                         map1.set(j, i);
                     }
                 }
             }
         }
         let indx = [];
         
         for(let [key, val] of map1){
             if(indx[0] === undefined){
                 indx[0] = key;
                 indx[1] = val;
             }
             if(key < indx[0]){
                 indx[0] = key;
                 indx[1] = val;
             }
         }
         if(indx.length === 0){
             return indx;
         } else{    
             let temp = ++indx[0];
             indx[0] =  ++indx[1];
             indx[1] = temp;
             return indx;
         }
   }
 };
 