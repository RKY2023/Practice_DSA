const sqrt = (n) => {
    let i,k;
    // login is wrong
    for(i=0, k=0;k<n; ) {
        i++;
        k += i;
        
    }
    return i;
}
console.log(sqrt(4));