/**
 * @param {string} s
 * @return {boolean}
 */
/**
    Goal: Given '(', ')', '{', '}', '[', ']' determine if the string is valid.
    String is valid if open brackets are closed with the same bracket AND open             brackets must be closed in the correct order. Should return a boolean

    Brainstorm:
    - Strings have indexes
    - We might be able to create an object with valid inputs: Strings open and close with matching bracket AND in the correct order
    - Then we can loop through the array and compare current value with next value.
    - Next value should have a specific target value (the closing value).

    Initial Pseudocode:
    1. Create an object with valid pairing.
    2. Loop through the string
    3. Take the first value and the next value and compare it with the elgible pairs in the object
    4. If it doesn't match return false
    5. If it matches move onto the next pair and compare it.
    6. If its able to go through the loop return true.


*/
var isValid = function (s) {
  const pairs = {
    '(': ')',
    '{': '}',
    '[': ']'
  };
  let temporary = [];
  for (let i = 0; i < s.length; i++) {
    let character = s[i];
    if (pairs[character]) {
      temporary.push(pairs[character]);
    } else {
      if (temporary.pop() !== character) return false
    }
  }
  return (temporary.length === 0)
}
