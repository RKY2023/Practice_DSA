/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumMountainRemovals = function(nums) {
    let count = 0;
    // find max & store max Idx
    let max = 0;
    let maxIdx = 0;
    for(let i =0; i< nums.length; i++ ) {
        if(nums[i] > max){
            max = nums[i];
            maxIdx = i;
        }
    }
    // divide into two including max then sort each side
    let leftHm = new Map();
    let rightHm = new Map();
    let sortedLeftArr = nums.slice(0,maxIdx+2).sort((a,b) => {
        // leftHm.set(a, 1);
        return b-a;
    })
    let sortedRightArr = nums.slice(maxIdx, nums.length).sort((a,b) => {
        // rightHm.set(a, 1);
        return b-a;
    })
    let rightSortIdx = 0;
    for(let i = maxIdx; i < nums.length && rightSortIdx < sortedRightArr.length;  ) {
        if(!rightHm.has(nums[i])){
            if(nums[i] == sortedRightArr[rightSortIdx]){
                i++;
                rightSortIdx++;
            } else if(nums[i] < sortedRightArr[rightSortIdx]){
                rightHm.set(nums[i], 1);
                i++;
            }  
        } else {
            rightSortIdx++;
            count++;
        }
    }
    let leftSortIdx = 0;
    for(let i = maxIdx; i >= 0 && leftSortIdx < sortedLeftArr.length;  ) {
        if(!leftHm.has(nums[i])){
            if(nums[i] == sortedLeftArr[leftSortIdx]){
                i--;
                leftSortIdx++;
            } else if(nums[i] < sortedLeftArr[leftSortIdx]){
                leftHm.set(nums[i], 1);
                i--;
            }  
        } else {
            leftSortIdx++;
            count++;
        }
    }
    return count;
};
