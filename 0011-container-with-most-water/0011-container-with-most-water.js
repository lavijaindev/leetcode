/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let left = 0;
    let right = height.length-1;

    let max_area = 0;
    let heightmetric, width, area;

    while(left<right) {
        heightmetric = Math.min(height[left], height[right]);
        width = right - left;
        area = heightmetric * width;
        
        max_area = Math.max(max_area, area);
        
        if(height[left] < height[right]) {
            left++;
        } else {
            right--;
        }
    }
    return max_area;
};