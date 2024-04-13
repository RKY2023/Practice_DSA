function sort012(arr, N)
{
    //your code here
    let hm = [0, 0 , 0];
    for ( let i = 0; i < N; i++) {
        hm[arr[i]] += 1; 
    }
    let j = 0;
    for (let a in hm) {
        while(hm[a] == 0){
            arr[j] = a;
            hm[a] -= 1;
            j++;
        }
        
    }
    return arr;
}

console.log(sort012([0,2,1,2,0],5))