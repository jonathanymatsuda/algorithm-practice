/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */

/**
Goal: Return INDEX of first occurrence of needle in haystack OR -1 (if needle is not part of haystack)

Brainstorm:
- Strings have positions
- Loop through the first string and compare it with the needle in the second string

 */
var strStr = function (haystack, needle) {
  if (needle.length === 0) return 0;

  for (let i = 0; i < haystack.length; i++) {
    if (needle[0] === haystack[i]) {
      if (needle === haystack.substring(i, i + needle.length)) {
        return i
      }
    }
  }
  return -1
};
