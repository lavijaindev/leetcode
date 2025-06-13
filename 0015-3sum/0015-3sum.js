/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    nums.sort((a, b) => a - b);
    let result = [];
    let left,right, sum;
    for (let a=0; a< nums.length-2; a++) {
        if(a > 0 && nums[a] === nums[a-1]) {
            continue;
        }
        left = a+1;
        right = nums.length-1;
        while(left < right) {
            const sum = nums[a] + nums[left] + nums[right];
            
            if(sum == 0) {
                result.push([nums[a], nums[left], nums[right]]);
                
                while(left < right && nums[left] === nums[left+1]) {
                    left++;
                }
                while(left < right && nums[right] === nums[right-1]) {
                    right--;
                }
                left++;
                right--;
            }
            else if(sum > 0) {
                right--;
            } else {
                left++
            }
        }
    }
    return result;
};