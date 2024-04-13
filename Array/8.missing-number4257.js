// https://www.geeksforgeeks.org/problems/missing-number4257/1?page=2&difficulty%5B%5D=-1&category%5B%5D=Arrays&sortBy=submissions

class Solution
{
     //Function to find the missing number.
     missingNumber(n, arr)
     {
         //your code goes here
         let agg = n*(n+1)/2;
         let sum = 0;
         for(let i in arr){
             sum += arr[i];
             
         }
         return agg-sum;
     }
}