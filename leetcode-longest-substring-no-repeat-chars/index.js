/**
 * @param {string} s
 * @return {number}
 */
const lengthOfLongestSubstring = (s) => {
  let currentStringInArray = [];
  let currentLongestLength = 0;
  for (let i = 0; i < s.length; i++) {
    const currentCharacterPosition = currentStringInArray.indexOf(s[i]);
    if (currentCharacterPosition !== undefined) {
      currentStringInArray.splice(0, currentCharacterPosition + 1);
      currentStringInArray.push(s[i]);
    }
    currentLongestLength = Math.max(
      currentLongestLength,
      currentStringInArray.length
    );
  }
  return currentLongestLength
};
