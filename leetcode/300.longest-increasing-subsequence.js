/*
 * @lc app=leetcode id=300 lang=javascript
 *
 * [300] Longest Increasing Subsequence
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function(nums) {
    let max = 0;
    let rightOverCounts = [];
    for (let i = nums.length - 1; i >= 0; i--) {
        let counts = 1;
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] < nums[j] && (rightOverCounts[j] + 1) > counts) {
                counts = rightOverCounts[j] + 1;
            }
        }
        rightOverCounts[i] = counts;
        if (max < counts) {
            max = counts;
        }
    }
    return max;
};
// @lc code=end

lengthOfLIS([10,9,2,5,3,7,101,18]);