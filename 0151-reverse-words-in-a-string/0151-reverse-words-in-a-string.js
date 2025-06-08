/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    let i = s.length - 1;
    let result = [];

    while (i >= 0) {
        // Skip trailing spaces
        while (i >= 0 && s[i] === ' ') {
            i--;
        }
        if (i < 0) break;

        let j = i; // End of the word

        // Find the start of the word
        while (i >= 0 && s[i] !== ' ') {
            i--;
        }

        // Extract and add the word
        result.push(s.slice(i + 1, j + 1));
    }

    return result.join(' ');
};