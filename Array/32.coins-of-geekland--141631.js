// https://www.geeksforgeeks.org/problems/coins-of-geekland--141631/1

/**
 * @param {number[][]} arr
 * @param {number} n
 * @param {number} k
 * @returns {number}
*/

class Solution{
  Maximum_Sum(arr,n, k){
      //code here
      let res = -Infinity;
      for(let i=0; i<=n-k; i++){
          for(let j=0; j<=n-k; j++){
              res = Math.max(res, this.subMat(arr, i, j, k, n));
          }
      }
      return res;
  }
  subMat(arr, i, j, k, n){
      let sum = 0;
      for(let x =i; x < i+k; x++){
          for(let y=j; y < j+k; y++){
              sum += arr[x][y];
          }
      }
      return sum;
  }
}

/**
 * @param {number[][]} arr
 * @param {number} n
 * @param {number} k
 * @returns {number}
*/

class Solution{
    Maximum_Sum(arr,n, k){
        //code here
        const dp = new Array(n+1).fill(0).map(()=>new Array(n+1).fill(0));
        let max = -50;
        for(let i=1;i<=n;i++){
            for(let j=1;j<=n;j++){
                dp[i][j] = dp[i-1][j] + dp[i][j-1] + arr[i-1][j-1] - dp[i-1][j-1];
                if(i>=k && j>=k) max = Math.max(max, dp[i][j] - dp[i-k][j]-dp[i][j-k]+dp[i-k][j-k]);
            }
        }
        return max;
    }
}