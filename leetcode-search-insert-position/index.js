/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */

/**
Goal: Given a sorted array and a target value return the index if the target is found. Return the index where it would be found.
Additional notes: O(log n) run time complexity.

Brainstorm:
- We will loop through this array.
- How do we address the case where the target is not found?
 - What if we don't get the case where the array is incrementing evenly? What if it increments by even numbers?

*/
var searchInsert = function (nums, target) {
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] >= target) {
      return i;
    }
  }
  return nums.length
};
