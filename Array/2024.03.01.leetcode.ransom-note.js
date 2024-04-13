/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
    let hm = {};
    for ( let i in magazine) {
        if(hm.has(magazine[i])) {
            hm[magazine[i] += 1];
        } else {
            hm[magazine[i]] = 1;
        }
    }
    let prev;
    let count = 0;
    for ( let i in ransomNote) {
        if(hm.has(ransomNote[i])) {
            if(prev == undefined)
            continue;
            else if (prev == ransomNote[i]){
                count++;
                if(hm[magazine[i]] == count){
                    return true;
                }
            }
            
        } else {
           
        }
        prev = ransomNote[i]
    }
};