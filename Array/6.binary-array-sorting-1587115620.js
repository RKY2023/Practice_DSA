// https://www.geeksforgeeks.org/problems/binary-array-sorting-1587115620/

class Solution {
    //Function to sort the binary array.
    binSort(A, N)
    {
        //your code here
        let l = 0, h=N-1;
        while(l<h) {
            if(A[l]==1 && A[h]==0) {
                A[l] = 0;
                A[h] = 1;
            } else if(A[l]==1 && A[h]==1) {
                h--;
                continue;
            } else if(A[l]==0 && A[h]==0) {
                l++;
                continue;
            }
            l++;
            h--;
        }
        return A;
    }
}