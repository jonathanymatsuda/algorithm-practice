/**
 * @param {string} s
 * @return {number}
 */

/**
Goal: Given a roman numeral - convert it to an integer
Example: s = 'III' output = 3
s = 'LVIII' output = 58

Brainstorm:
- We are given a string which means we can index it.
- Given the chart on the left we could create a huge conditional that will convert each character to the value.
  - Concern would be with numbers like 4 where you would essentially subtract 1 from 5 creating the roman numeral IV
  - We could capture this with a conditional since there are going to be 6 instances where roman numerals would precede.
  - We might be able to capture also stating that if the number on the right is greater than the number on the left... add it. If not, then subtract the number on the right with the number on the left.

  OR

  - Group those six instances and create if conditions for them.

Pseudocode:
1. Create a storage value and set it equal to 0.
2. Create a for loop for the Roman Numeral 's'.
3. If I exists add 1 to storage in step 1  OR
   If V exists add 5 to storage in step 1 OR
   If X exists add 10 to storage in step 1 OR
   If L exists add 50 to storage in step 1 OR
   If C exists add 100 to storage in step 1 OR
   If D exists add 500 to storage in step 1 OR
   If M exists add 1000 to storage in step 1.


Last step is to return the storage value.
Note: we still need to take care of the different edge cases with values like 4, 9 etc.


*/

// Solution
var romanToInt = function(s) {
    let output = 0;
    for (let i = 0; i < s.length; i++) {
        if (s[i] === 'I' && s[i+1] === 'V') {
            output += 4;
            i++
        } else if (s[i] === 'I' && s[i+1] === 'X') {
            output += 9;
            i++
        } else if (s[i] === 'X' && s[i+1] === 'L') {
            output += 40;
            i++
        } else if (s[i] === 'X' && s[i+1] === 'C') {
            output += 90;
            i++
        } else if (s[i] === 'C' && s[i+1] === 'D') {
            output += 400;
            i++
        } else if (s[i] === 'C' && s[i+1] === 'M') {
            output += 900;
            i++
        } else if (s[i] === 'I') {
            output += 1;
        } else if (s[i] === 'V') {
            output += 5
        } else if (s[i] === 'X') {
            output += 10
        } else if (s[i] === 'L') {
            output += 50
        } else if (s[i] === 'C') {
            output += 100
        } else if (s[i] === 'D') {
            output += 500
        } else if (s[i] === 'M') {
            output += 1000
        }
    }
    return output;
}



// Solution Simplified (creating an object with the conversions)
var romanToInt = function (s) {

  const sym = {
    'I': 1,
    'V': 5,
    'X': 10,
    'L': 50,
    'C': 100,
    'D': 500,
    'M': 1000
  }

  let result = 0;
  for (i = 0; i < s.length; i++) {
    const current = sym[s[i]];
    const next = sym[s[i + 1]];
    if (current < next) {
      result += next - current
      i++
    } else {
      result += current
    }
  }
  return result;
};
