/**
 * @param {number[]} nums
 * @return {number}
 */

/**
Goal: Given array of integers (sorted in non-decreasing order) remove duplicates. Relative order should be kept same. DO NOT allocate extra space for another array. Return k

Example: nums = [1,1,2]
Output: 2, nums = [1,2,_]
Explanation: Return k = 2 with first two elements being 1 and 2 respectively.

Brainstorm:
- There is a sort method but it will take the first value of the string and then put it in that order ([1, 10, 2,3,4,5])
- Refrain from allocating a space for another array.
  - Can still add a placeholder for integer to compare other values to
- There is a filter method - potentially look this up on MDN
- Pop method is going to delete every element at the end of the array
- Splice won't ever create a new array it will just change the contents of an array. This could be how we delete or replace numbers with potentially an underscore or other character. This could be a good option

Pseudocode:
1. Loop through the array.
2. Compare the current value with the next value.
  a. If its the same splice it out.
  b. If its not the same move forward and compare the next values.
3. Return the length (k) and the array

*/
var removeDuplicates = function (nums) {
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === nums[i + 1]) {
      nums.splice(i, 1);
      i--;
    }
  }
  return nums.length
};
