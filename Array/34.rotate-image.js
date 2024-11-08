// https://leetcode.com/problems/rotate-image/

/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function(matrix) {
  // do transpose 
  let n = matrix.length;
  const newMat = new Array(n).fill(0).map(() => new Array(n).fill(0));
  for( let i = 0; i < matrix.length; i++ ) {
      // i , j => j , (n-1-i)
      for(let j = 0; j < (matrix[i].length); j++) {
          let temp = matrix[i][j];
          matrix[i][j] = matrix[j][n-1-i];
          matrix[j][n-1-i] = temp;
          
          // newMat[j][n-1-i] = matrix[i][j];
      }
  }
  // swap vertically or horizontally b4r Trans.
  return newMat;
};
