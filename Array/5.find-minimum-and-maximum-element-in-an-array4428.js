// https://www.geeksforgeeks.org/problems/find-minimum-and-maximum-element-in-an-array4428
class Solution{
    getMinMax(arr,n){
        //code here
        let max = -Infinity;
        let min = Infinity;
        for(let i=0; i<n; i++) {
            if(arr[i] > max) {
                max = arr[i];
            }
            if(arr[i] < min) {
                min = arr[i];
            }
        }
        return [min, max];
    }
}