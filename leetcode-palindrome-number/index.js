/**
 * @param {number} x
 * @return {boolean}
 */
/**
Goal: Given 'x' return true/false if palindrome integer (same forwards/backwards)
Example: 121 does not equal 123 = false

Brainstorm:
- If you convert it to string we can assign indexes and potentially create a for loop.
- Some type of if condition towards end comparing loop output with x
- toString method for conversion to a string

Pseudocode:
- Create storage for the reversed number (array)
- Convert x to a string.
- Starting at the end use a for loop to take each indexed string:
  1. Initalizor will be the length of the converted number to string.
  2. Condition will be set to zero.
  3. Final expression will be decremented.
 - Push each value to the storage created in step 1
- Join the array
- Convert it back to a number
- Compare the storage with x using an if condition.
 - Return true or false accordingly


*/
var isPalindrome = function (x) {
  const reversed = [];
  const numberString = x.toString();
  for (let i = numberString.length - 1; i >= 0; i--) {
    reversed.push(numberString[i]);
  };
  const reversedNumber = reversed.join('');
  if (numberString === reversedNumber) {
    return true;
  }
  return false;
};
