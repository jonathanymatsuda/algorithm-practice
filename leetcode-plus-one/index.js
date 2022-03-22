/**
 * @param {number[]} digits
 * @return {number[]}
 */

/**
Brainstorm:
Example
Given [9] === [1,0]
Given [1,2,3] === [1,2,4]

- We could convert an array into a number somehow, add one, take each digit and put it back into an array (which may involve converting it to a string after)
 */
var plusOne = function (digits) {
  for (let i = digits.length - 1; i >= 0; i--) {
    if (digits[i] !== 9) {
      digits[i]++;
      return digits
    }
    digits[i] = 0;
    if (i === 0) {
      digits.unshift(1);
      return digits
    }
  }
};

//commented out code
