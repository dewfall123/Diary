/*
 * @lc app=leetcode id=53 lang=javascript
 *
 * [53] Maximum Subarray
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    if (!nums.length) {
        return 0;
    }
    let dp = [ nums[0], ];
    let max = dp[0];
    for (let i = 1; i < nums.length; i++) {
        dp[i] = (dp[i - 1] > 0 ? dp[i - 1] : 0 ) + nums[i];
        max < dp[i] && ( max = dp[i] );
    }
    return max;
};

