/*
 * @lc app=leetcode id=724 lang=javascript
 *
 * [724] Find Pivot Index
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function(nums) {
    const counts = [];
    for (let i = 0; i < nums.length; i++) {
        counts[i] = (counts[i - 1] || 0) + nums[i];
    }
    for (let i = 0; i < nums.length; i++) {
        const left = counts[i - 1] || 0;
        const right = counts[nums.length - 1] - counts[i];
        if (left === right) {
            return i;
        }
    }
    return -1;
};
// @lc code=end

