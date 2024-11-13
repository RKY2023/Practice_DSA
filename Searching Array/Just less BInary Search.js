var binarySearch = function (arr, val) {
  let l =0;
  let h = arr.length -1;
  let m ;
  let r = -1;
  while(l<=h){
      m = Math.floor(l+(h-l)/2);
      console.log(l,h,m);
      if(arr[m] < val) {
        r = m;
        l = m+1;
      } else{
        h = m-1;
      }
  }
  console.log('ss',l,h,m)
  return r;
}

let arr = [1,2,3,3,5];
let v = 6;
console.log(binarySearch(arr, v));
