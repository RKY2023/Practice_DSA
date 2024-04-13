// https://www.geeksforgeeks.org/problems/find-missing-and-repeating2512/1?page=1&difficulty%5B%5D=1&category%5B%5D=Arrays&sortBy=submissions
//{ Driver Code Starts
// Initial Template for javascript

'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.trim().split('\n').map(string => {
        return string.trim();
    });
    
    main();
});

function readLine() {
    return inputString[currentLine++];
}

function printList(res,n){
    let s="";
    for(let i=0;i<n;i++){
        s+=res[i];
        s+=" ";
    }
    console.log(s);
}


function main() {
    let t = parseInt(readLine());
    let i = 0;
    for(;i<t;i++)
    {
        let n = parseInt(readLine());
        let arr = new Array(n);
        let input_ar1 = readLine().split(' ').map(x=>parseInt(x));
        for(let i=0;i<n;i++){
            arr[i] = input_ar1[i];
        }
        let obj = new Solution();
        let res = obj.findTwoElement(arr, n);
        printList(res,res.length);
        
    }
}// } Driver Code Ends


// } Driver Code Ends


//User function Template for javascript
/**
 * @param {number[]} arr
 * @param {number} n
 * @returns {number[]}
*/

class Solution
{
    //Function to find two repeating elements in an array of size n.
    findTwoElement( arr, n)
    {
        //your code here
        let map = {};
        let repeatingN = arr[0];
        let sum = 0;
        for(let i=0; i<n;i++) {
            sum +=arr[i];
            if(map[arr[i]] == undefined) {
                map[arr[i]] = 1;
            } else {
                repeatingN = arr[i];
            }
        }
        let num = sum - ( n * (n+1)/2);
        return [repeatingN, repeatingN-num];
    }
}