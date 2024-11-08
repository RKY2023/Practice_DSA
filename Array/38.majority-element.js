// https://www.geeksforgeeks.org/majority-element/

function majorityElement(arr) {
  const n = arr.length;
  let candidate = -1;
  let count = 0;

  // Find a candidate
  for (const num of arr) {
      if (count === 0) {
          candidate = num;
          count = 1;
      } else if (num === candidate) {
          count++;
      } else {
          count--;
      }
  }

  // Validate the candidate
  count = 0;
  for (const num of arr) {
      if (num === candidate) {
          count++;
      }
  }
  
  // If count is greater than n / 2, return the candidate; otherwise, return -1
  if (count > n / 2) {
      return candidate;
  } else {
      return -1;
  }
}
