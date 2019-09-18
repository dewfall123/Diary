/*
 * @lc app=leetcode id=152 lang=javascript
 *
 * [152] Maximum Product Subarray
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function(nums) {
    if (nums.length < 2) {
        return nums[0];
    }
    let result = nums[0];
    let max = nums[0];
    let min = nums[0];
    for (let i = 1; i < nums.length; i++) {
        let preMax = max;
        max = Math.max(nums[i], max * nums[i], min * nums[i]);
        min = Math.min(nums[i], preMax * nums[i], min * nums[i]);
        (max > result) && (result = max);
    }
    return result;
};

maxProduct([2,3,-2,4]);
