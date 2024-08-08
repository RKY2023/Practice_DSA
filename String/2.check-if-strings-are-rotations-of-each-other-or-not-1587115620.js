// https://www.geeksforgeeks.org/problems/check-if-strings-are-rotations-of-each-other-or-not-1587115620/1?page=1&difficulty%5B%5D=-1&category%5B%5D=Strings&sortBy=submissions

class Solution 
{
    //Function to check if two strings are rotations of each other or not.
    areRotations(s1, s2)
    {
        // code here
        let rotated=s1+s1;
        let cnt=0;
        let j=0;
        for(let i=0;i<rotated.length;i++){
            if(j==s2.length)break;
            if(rotated[i]==s2[j]){
            cnt++;
            j++;}
        }
        if(cnt==s2.length) return true;
        return false;
    }
}