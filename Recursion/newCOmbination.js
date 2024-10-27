let A = [1,2,3];
let res = [];
let hm = new Map();
function comb(arr, start, product){
  if(arr.length > 0) {
    console.log(arr, product);
    res.push(arr);
    hm.set(arr, product);
  }
  for(let i = start; i < A.length; i++){
    comb(arr.toString().concat(A[i]), i+1, product*A[i]);
  }
}
comb([], 0, A[0]);
console.log(hm);