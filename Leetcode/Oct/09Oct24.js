// https://leetcode.com/problems/minimum-add-to-make-parentheses-valid/?envType=daily-question&envId=2024-10-09


/**
 * @param {string} s
 * @return {number}
 */
var minAddToMakeValid = function(s) {
    const reParen = /\(\)/;
    if(s.search(reParen) >= 0) {
        return minAddToMakeValid(s.replace('()', ''));
    } else {
        return countValid(s);
    }
};
var countValid = function(s){
    return s.length
}