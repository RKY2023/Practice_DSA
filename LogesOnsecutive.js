/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
    let set1 = new Set();
    let longest = 0;
    for(let i=0; i <nums.length; i++ ) {
        if(!set1.has(nums[i])) {
            set1.add(nums[i]);
        }
    }
    // console.log(set1);
    for( let a of set1){
        let maxConsecutive = 0;
        let nextPresent = true;
        let next = a + 1;
        console.log(a);
        while(nextPresent){
          console.log(next);
            if(set1.has(next)){
                maxConsecutive++;
                console.log(maxConsecutive);
                if(maxConsecutive > longest){
                    longest = maxConsecutive;
                }
                next++;
            } else {
                maxConsecutive = 0;
                nextPresent = false;
            }
        }
        console.log(a);
        return longest;

    }

};

let arr = [100,4,200,1,3,2];
longestConsecutive(arr);