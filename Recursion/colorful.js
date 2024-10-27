let A = [1,2,3];
let res = [];
let hm = new Map();
function comb(arr, start, product){
  
  for(let i = 0; i < A.length; i++){
    let str = '';
    let product = 1;
    for(let j = i; j < A.length ; j++) {
      str += A[j];
      product *= A[j];
      if(hm.has(product)){
        return 0;
      } else{
        hm.set(product, str);
      }
    }
  }
}
comb([], 0, A[0]);
console.log(hm);