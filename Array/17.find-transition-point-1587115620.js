// https://www.geeksforgeeks.org/problems/find-transition-point-1587115620/1?page=1&difficulty%5B%5D=0&category%5B%5D=Arrays&sortBy=submissions

class Solution {
  transitionPoint(arr, n) {
    //code here
    for(let i =0; i< arr.length; i++) {
        if(arr[i] === 1){
            return i;
        }
    }
    return -1;
  }
}
