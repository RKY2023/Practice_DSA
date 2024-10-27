// https://www.interviewbit.com/problems/colorful-number/

module.exports = { 
  //param A : integer
  //return an integer
   colorful : function(A){
         let res = [];
         while(A > 0){
             res.push(A%10)
             A = Math.floor(A/10);
         }
         let hm = new Map();
         for(let i = 0; i < res.length; i++){
             let str = '';
             let product = 1;
             for(let j = i; j < res.length ; j++) {
                 str += res[j];
                 product *= res[j];
                 if(hm.has(product)){
                     return 0;
                 } else{
                     hm.set(product, str);
                 }
             }
         }
         return 1;
   }
 };
 