/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function(s) {
        const vowels = ['a','e','i','o','u','A','E','I','O','U'];
        let chars = s.split('');
        let left = 0;
        let right = chars.length-1;
        
        while (left < right) {
            while(left < right && !vowels.includes(chars[left])) {
                left++;
            }
            while(right > left && !vowels.includes(chars[right])) {
                right--;
            }

            if(left < right) {
                let temp = chars[left];
                chars[left] = chars[right];
                chars[right] = temp;
                left++;
                right--;
            }
        }
        return chars.join('');
};