/**
 * @param {string} s
 * @return {number}
 */

/**
Ultimate: Lengh of last word

Brainstorm:
- Strings have indexes
- Potentially we could do if (s[i] === '' take the length of the string after that)
 - ^ How would we detect if its the last space in the string
- Reverse for loop - seems plausible
  - Once it hits a letter and until it hits next space take the length of that.
  - Create storage for the last word
  - Return storage length

- Potential problems:
  - Unlimited amount of spaces - look at example 2 - solved by above solution
 */
var lengthOfLastWord = function (s) {
  const phrase = s.trim();
  const words = phrase.split(' ');
  const lastWord = words[words.length - 1];
  return lastWord.length
};
