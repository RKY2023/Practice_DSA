// https://www.geeksforgeeks.org/problems/greater-on-right-side4305/1?page=3&difficulty%5B%5D=-1&category%5B%5D=Arrays&sortBy=submissions
class Solution{
    nextGreatest(arr,n){
        //code here
        let max = -1;
        let curr;
        for ( let i =n-1; i >= 0; i--) {
            curr = arr[i];
            arr[i] = max;
            if(curr > max) {
                max = curr; 
            }
            
        }
        arr[n-1] = -1;
        return arr;
    }
}
