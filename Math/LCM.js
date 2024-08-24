function LCM(arr) {
  let res = arr[0]
  for (let i = 1; i < arr.length; i++) {
    res = (arr[i] * res) / GCD(arr[i], res)
  }
  return res
}

function GCD(a, b) {
  if (b === 0) return a
  return GCD(b, a % b)
}

let a = ['1/25','3/76'];
console.log(a.shift());