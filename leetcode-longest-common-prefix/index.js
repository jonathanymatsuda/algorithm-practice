/**
 * @param {string[]} strs
 * @return {string}
 */

/**
Goal: Find the longest common prefix string given an ARRAY of STRINGS. If none, return an EMPTY string.
Example: strs = ["flower", "flow", "flight"] output: "fl"

Brainstorm:
- Sounds like we will have to iterate the array and maybe even the individual strings. Loop within the array

- There has to be some type of comparison where it takes the first (0) position of each string compares it and if they match it moves on to the second (1) position so on and so forth

- We will need to store each value in an empty string and compare it with the next value then move on.

- Strings have indexes like arrays

- Maybe utilize charAt method.

- Use the first word as your source of truth to compare all other words.

Pseudocode:
1. Create empty string storage.
2. Create a for loop for the array of strings
3. Within the for loop create another for loop that will iterate through each string.
4. Compare that value with the value of the next string until length of array.(array.length).
5. Add each value to the storage created in step 1.
6. If that value matches keep it in storage and move onto the next letter.
7. If it does not, return the storage created in step 1
Note: make sure to return the storage created in step 1 first in the event there is no common prefix.
*/

var longestCommonPrefix = function (strs) {
  let longestPrefix = '';
  for (let i = 0; i < strs[0].length; i++) {
    const characterTracker = strs[0][i];
    for (let j = 0; j < strs.length; j++) {
      if (strs[j][i] !== characterTracker) {
        return longestPrefix
      }
    }
    longestPrefix += characterTracker;
  }
  return longestPrefix
};
