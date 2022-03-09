/**
 * @param {number[]} nums
 * @return {number}
 */

/**
Goal: Find largest sum and return its sum

What constitutes a contiguous subarray??
- Subarray without skipping any of the numbers and also has the highest sum

Brainstorm:
- Most likely going to need some kind of tracker that starts at 0.
- Add the previous value to the next value.
- Be doing some type of for loop in the array.
- Return the tracker
- Maybe we need two trackers to compare with??

 */
var maxSubArray = function (nums) {
  let tracker = 0;
  let sum = -Infinity;
  for (let i = 0; i < nums.length; i++) {
    tracker = Math.max(nums[i], (tracker + nums[i]))
    sum = Math.max(sum, tracker)
  }
  return sum
};
