/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
   const subStr = new Map();
   let maxLength = 0;
   let start = 0;

   for(let end = 0; end < s.length; end++) {
    const char = s[end];
    if(subStr.has(char) && subStr.get(char) >= start) {
        start = subStr.get(char) + 1;
    }
    subStr.set(char,end);
    maxLength = Math.max(maxLength, end - start + 1);

   }
   return maxLength;
};