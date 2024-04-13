function remove_duplicate(arr,n){
    //code here
    let a = [];
    a.push(arr[0]);
    let prev = arr[0];
    for ( let i=1; i < n; i++) {
        if(prev == arr[i]){
            continue;
        } else {
            a.push(arr[i]);
        }
        prev = arr[i];
    }
    return a;
}
const tt = remove_duplicate([2,2,2,2,2],5);
console.log(tt);
