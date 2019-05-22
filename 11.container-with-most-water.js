/*
 * @lc app=leetcode id=11 lang=javascript
 *
 * [11] Container With Most Water
 */
/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    // find the
    let  maxArea = 0;
    let [ left, right, leftMax, rightMax ] = [0, height.length - 1, -1, -1];
    const area = (i, j) => Math.min(height[j], height[i]) * (j - i);
    while (left < right) {
        if (height[left] < height[right]) {
            if (leftMax < height[left]) {
                leftMax = height[left];
                maxArea = Math.max(area(left, right), maxArea);
            }
            left++;
        } else {
            if (rightMax < height[right]) {
                rightMax = height[right];
                maxArea = Math.max(area(left, right), maxArea);
            }
            right--;
        }
    }
    return maxArea;
};

console.log( maxArea([1,2,1]) );

