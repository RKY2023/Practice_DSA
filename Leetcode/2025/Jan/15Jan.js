// https://leetcode.com/problems/minimize-xor/?envType=daily-question&envId=2025-01-15

var minimizeXor = function(num1, num2) {
  let count1 = 0;
  let n1 = num1;
  while(n1 > 0){
      count1 += n1 % 2;
      n1 = n1 >> 1;
  }
  let count2 = 0;
  let n2 = num2;
  while(n2 > 0){
      count2 += n2 % 2;
      n2 = n2 >> 1;
  }
  let result = num1;
  console.log(count1, count2)
  if(count1 > count2){
    for(let i = 0; i < 32 && count1 > count2; i++) {
        if((result & (1 << i)) != 0){
            // result ^= (1 << i);
            // result &= result;
            result &= ~(1 << i);
            console.log(result, count1)
            count1--;
        }
      }       
  } else {
      for(let i = 0; i < 32 && count2 > count1; i++) {
        console.log(result, result & (1 << i))
          if((result & (1 << i)) == 0){
              result |= (1 << i);
              console.log(result, count1)
              count1++;
          }
      } 
  }
  return result;
};

// Test Cases
let arr = [
  [3, 5],
  [1, 12], 
  // [2, 7],
  // [7, 2],
]
for (let i=0; i<arr.length; i++){
  console.log('case ',i,'=>',minimizeXor(arr[i][0], arr[i][1]));
}