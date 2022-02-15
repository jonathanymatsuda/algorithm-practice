/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */

/**
Goal: Given integer array of nums and an integer val... remove val in nums. The relative order of elements may be changed
DO NOT allocate space for another array. You must do this by modifying the input array.

Example: [3,2,2,3] val = 3
Output: 2, nums =[2,2]

Brainstorm:
- Filter creates new array based on certain condition
- For loop within the array
  - If condition - if nums[i] === val then splice it out
- Return the array

Pseudocode:
1. Create a for loop for the nums array.
2. If the nums[i] === val splice the value
3. Return the nums array outside of the loop at the end.
*/
var removeElement = function (nums, val) {
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === val) {
      nums.splice(i, 1);
      i--;
    }
  }
  return nums.length
};
