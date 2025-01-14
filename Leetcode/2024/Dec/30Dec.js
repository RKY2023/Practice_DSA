function countGoodString(low, high, zeros, ones) {
  let m = 10e9+7;
  let BinaryStrCount = Array(high+1).fill(0);
  BinaryStrCount[0] = 1;
  for(let i=1; i < BinaryStrCount.length; i++){
    if(i >= zeros) {
      BinaryStrCount[i] = (BinaryStrCount[i] + BinaryStrCount[i - zeros]) % m;
    }
    if(i >= ones) {
      BinaryStrCount[i] = (BinaryStrCount[i] + BinaryStrCount[i - ones]) % m;
    }
  }
  let result = 0;
  for(let start=low; start <= high; start++){
    result += BinaryStrCount[start] % m;
  }
  return result;
}

console.log(countGoodString(3, 3, 1, 1));