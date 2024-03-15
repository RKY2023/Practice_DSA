// Method 1
let loopCount = 0;
const gcd = (a, b) => {
    loopCount++;
    if (a == 0){
        return b;
    }
    if (b == 0){
        return a;
    }
    if (a == b){
        return a;
    }
    if (a > b) {
        return gcd(a-b, b);
    }
    return gcd(a, b-a);
}
let a = 59;
let b = 3;
console.log(gcd(a,b));
console.log('Loops: ',loopCount);