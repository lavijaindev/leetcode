/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    const new_s = s.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
        let i = 0;
        let j = new_s.length-1;
        let is_palindrome = true;
        while (i < j) {
            if(new_s[i] !== new_s[j]) {
                is_palindrome = false;
                break;
            }
            i++;
            j--;
        }
    return is_palindrome;
};