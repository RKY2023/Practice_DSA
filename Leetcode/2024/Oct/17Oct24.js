/**
 * @param {number} num
 * @return {number}
 */

// TC O ( n )
// SC O ( 1 )
const maximumSwap = (num) => {
  const nums = num.toString().split('');

  // Track the current max, it's location, and the best swap as left and right
  let maxIdx = nums.length - 1, left = -1, right = nums.length - 1;

  // iterate through the digits from right to left
  for(let i = maxIdx; i >= 0; i--) {
      const current = Number(nums[i]);
      const max = Number(nums[ maxIdx ]);

      // if the digit is greater than the max, set it and its location to the new max
      if(current > max) {
          maxIdx = i;
      } else if(current < max) {
          // if the digit is less than the current max
          // set this index to the left and the max to the right because it's the best swap
          right = maxIdx;
          left = i;
      }
  }

  // If the left is -1 it's already the best
  if(left == -1) return num;

  // swap the left and right index numbers
  [ nums[left], nums[right] ] = [ nums[right], nums[left] ];

  return Number(nums.join(''));
};