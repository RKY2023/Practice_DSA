// https://www.geeksforgeeks.org/problems/find-the-fine4353/1?page=3&difficulty%5B%5D=-1&category%5B%5D=Arrays&sortBy=submissions
class Solution {
    totalFine(n, date, car, fine) {
        // code here
        let odd;
        let fines = 0;
        if(date % 2 == 0)
            odd = 0;
        else 
            odd = 1;
        
        for( let i = 0; i < n; i++) {
            if (car[i] % 2 != odd) {
                fines += fine[i];
            }
        }
        return fines;
    }
}