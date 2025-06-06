/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
        let n = nums.length;
        const result = Array(n).fill(1);
        let leftProduct = 1;
        for(let i=0;i<n;i++) {
            result[i] = leftProduct;
            leftProduct *= nums[i];
        }

        rightProduct = 1;
        for(i = n-1; i >= 0; i--) {
            result[i] *= rightProduct;
            rightProduct *= nums[i];
        }
        return result;
};