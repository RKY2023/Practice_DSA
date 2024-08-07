// https://www.geeksforgeeks.org/problems/subarray-with-given-sum-1587115621/1?page=1&difficulty%5B%5D=0&category%5B%5D=Arrays&sortBy=submissions

class Solution {
    // Function to find a continuous sub-array which adds up to a given number.
    subarraySum(arr, n, s) {
        // your code here
        let left = 0;
        let sum = 0;
        for(let right=0; right < arr.length; right++){
            sum += arr[right];
            if(s === 0 && arr[right] === 0) {
                return [right+1 ,right+1];
            }
            while(sum > s) {
                sum -= arr[left];
                left++;
            }
            
            if(sum === s && s !== 0) {
                return [left+1, right+1];
            }
        }
        return [-1];
    }
}


// // Failed as for [1, 2, 3 , 7, 5] as it removes 3 rather than [1, 2]
// class Solution {
//     // Function to find a continuous sub-array which adds up to a given number.
//     subarraySum(arr, n, s) {
//         // your code here
//         let sum = 0;
//         let map1 = new Map();
//         for(let i=0; i < arr.length; i++){
//             sum += arr[i];
//             if(sum === s ){
//                 return [1, i+1];
//             }
//             if(map1.has(sum - s)){
//                 let startIdx = map1.get(sum-s)+1;
//                 return [startIdx, i+1];
//             }
//             map1.set(arr[i], i+1);
//         }
//         return [-1];
//     }
// }