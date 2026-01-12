/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    const seenNumbers = new Map();

    for (let i = 0; i < nums.length; i++) {
        const currentNum = nums[i];
        const complement = target - currentNum;
        if (seenNumbers.has(complement)) {
            return [seenNumbers.get(complement), i];
        }
        seenNumbers.set(currentNum, i);
    }
    return [];
};