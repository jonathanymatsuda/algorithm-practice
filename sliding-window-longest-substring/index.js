var lengthOfLongestSubstring = function(s) {
    if (s === null || s.length === 0) return 0;

    let i = 0;
    let j = 0;
    let max = 0;
    let longestSubstring = new Set();

    while (i < s.length) {
        if(!longestSubstring.has(s[i])) {
            longestSubstring.add(s[i]);
            i++;
            max = Math.max(longestSubstring.size, max)
        } else {
            longestSubstring.delete(s[j]);
            j++
        }
    }
    return max
};
