/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
        let wordsWithSpace = s.split(" ");
        let words = wordsWithSpace.filter(word => word.trim() !== '').reverse();
        return words.join(" ");
};