// https://www.interviewbit.com/problems/first-repeating-element/

module.exports = { 
  //param A : array of integers
  //return an integer
   solve : function(A){
         let map1 = new Map();
         for (let a of A) {
             if(map1.has(a)) {
                 map1.set(a, map1.get(a)+1)
             } else{
                 map1.set(a, 1);
             }
         }
         for (let [key, val] of map1){
             if(val === 2){
                 return key;
             }
         }
         return -1;
   }
 };
 