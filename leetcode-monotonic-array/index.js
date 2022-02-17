/**
 * @param {number[]} nums
 * @return {boolean}
 */

/**
Brainstorm:
- Return boolean
- For loop nums array
- Take current value and compare with the next value.
- if (nums[i] <= nums[i+1] || nums[i] >= nums[i+1])
- Create for loop within a for loop
  - if (nums[i] <= nums[j] || nums [i] >= nums[j] || nums[i] === nums[j])
- If the loop fully iterates the array then return true at the end... if not return false inside loop

*/

var temporaryDirection = {
  increase: 'increasing',
  decrease: 'decreasing'
};

Object.freeze(temporaryDirection);

var isMonotonic = function (nums) {
  let direction = null;
  for (let i = 0; i < nums.length; i++) {
    if (!direction) {
      if (nums[i] < nums[i + 1]) {
        direction = temporaryDirection.increase
      } else if (nums[i] > nums[i + 1]) {
        direction = temporaryDirection.decrease
      }
    } else {
      if (direction === temporaryDirection.increase && nums[i] > nums[i + 1]) {
        return false
      } else if (direction === temporaryDirection.decrease && nums[i] < nums[i + 1]) {
        return false
      }
    }
  }
  return true
};
