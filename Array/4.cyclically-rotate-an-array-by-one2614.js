// https://www.geeksforgeeks.org/problems/cyclically-rotate-an-array-by-one2614/
class Solution{
    rotate(arr,n){
        //code here
        let l = arr[n-1];
        for(let i=n-1; i>0; i--) {
            arr[i]=arr[i-1];
        }
        arr[0]=l;
        return arr;
    }
    
}