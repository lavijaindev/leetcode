/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var mergeAlternately = function(word1, word2) {
    let i = j = 0;
    const result = [];
    const len1 = word1.length;
    const len2 = word2.length;

    while (i < len1 || j < len2) {
        if (i < len1) {
            result.push(word1[i++]);
        }
        if (j < len2) {
            result.push(word2[j++]);
        }
    }

    return result.join('');
};