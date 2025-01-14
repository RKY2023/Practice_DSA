// https://leetcode.com/problems/maximum-width-ramp/submissions/1418288892/?envType=daily-question&envId=2024-10-10

/**
 * @param {number[]} nums
 * @return {number}
 */
var maxWidthRamp = function(nums) {
  let stack = [];
  let maxWidth = 0;

  // Build a decreasing stack
  for (let i = 0; i < nums.length; i++) {
      if (stack.length === 0 || nums[stack[stack.length - 1]] > nums[i]) {
          stack.push(i);
      }
  }

  // Traverse from the end to find the maximum width ramp
  for (let j = nums.length - 1; j >= 0; j--) {
      while (stack.length > 0 && nums[stack[stack.length - 1]] <= nums[j]) {
          maxWidth = Math.max(maxWidth, j - stack.pop());
      }
  }

  return maxWidth;
};
