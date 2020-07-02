/*
 * @lc app=leetcode id=327 lang=javascript
 *
 * [327] Count of Range Sum
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} lower
 * @param {number} upper
 * @return {number}
 */
var countRangeSum = function(nums, lower, upper) {
    const sums = [];
    let sum = 0;
    for (const i of nums) {
        sum += i;
        sums.push(sum);
    }

    // find sum[j] - sum[i] is >= a and <= b
    // sum[j] >= sum[i] + a
    // sum[j] <= sum[i] - b
    
};
// @lc code=end

