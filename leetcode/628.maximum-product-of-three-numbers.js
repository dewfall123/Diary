/*
 * @lc app=leetcode id=628 lang=javascript
 *
 * [628] Maximum Product of Three Numbers
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumProduct = function(nums) {
    let p = 1;
    nums.sort((a, b) => a - b);
    const last = nums.length - 1;
    return Math.max(nums[0] * nums[1] * nums[last], nums[last] * nums[last - 1] * nums[last - 2]);
};
// @lc code=end

