/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    let j = 0; 
    let size = nums.length;
    for(i=0;i<size;i++) { 
        if(nums[i]!== 0) {
            nums[j] = nums[i];
            j++;
        }
    }

    while(j < nums.length) {
        nums[j] = 0;
        j++
    }

    return nums;
};