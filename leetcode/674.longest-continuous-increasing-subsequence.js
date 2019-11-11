/*
 * @lc app=leetcode id=674 lang=javascript
 *
 * [674] Longest Continuous Increasing Subsequence
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var findLengthOfLCIS = function(nums) {
    if (nums.length <= 1) {
        return nums.length;
    }
    let count = 1;
    let max = 1;
    for(let i = 1; i < nums.length; i++) {
        if (nums[i] > nums[i - 1]) {
            count++;
            count > max && ( max = count );
        } else {
            count = 1;
        }
    }
    return max;
};
// @lc code=end

