// https://leetcode.com/problems/find-the-duplicate-number/
/**
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function(nums) {
    let s_sum = nums.length * (nums.length + 1 ) / 2;
    let sum = 0;
    for (let i = 0; i < nums.length; i++) {
        sum += nums[i];
    }
    if((s_sum - sum) > 0){
        return nums.length + sum - s_sum;
    }
    return nums[0];
};