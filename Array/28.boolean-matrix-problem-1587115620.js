// https://www.geeksforgeeks.org/problems/boolean-matrix-problem-1587115620/1?page=3&difficulty%5B%5D=1&category%5B%5D=Arrays&sortBy=submissions

/**
 * @param {number[][]} matrix
*/
class Solution 
{
    //Function to modify the matrix such that if a matrix cell matrix[i][j]
    //is 1 then all the cells in its ith row and jth column will become 1.
    booleanMatrix(matrix)
    {
        // code here
        let rows = new Set();
        let cols = new Set();
        for(let i=0; i<matrix.length; i++){
            for(let j=0; j<matrix[i].length; j++){
                if(matrix[i][j] == 1){
                    rows.add(i);
                    cols.add(j);
                }
            }   
        }
        for(let i=0; i<matrix.length; i++){
            for(let j=0; j<matrix[i].length; j++){
                if(rows.has(i) || cols.has(j)){
                    matrix[i][j] = 1;
                }
            }     
        }
        return matrix;
    }
}
