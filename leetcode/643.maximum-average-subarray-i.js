/*
 * @lc app=leetcode id=643 lang=javascript
 *
 * [643] Maximum Average Subarray I
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findMaxAverage = function(nums, k) {
    if (nums.length < k) {
        return nums.reduce((count, i) => count + i, 0) / k;
    }
    let count1 = 0;
    let count2 = 0;
    let n = 0;
    while (n < k) {
        count2 += nums[n++];
    }
    let max = count2 - count1;
    let i = 0;
    let j = k;
    while (j < nums.length) {
        count1 += nums[i++];
        count2 += nums[j++];
        if (count2 - count1 > max) {
            max = count2 - count1;
        }
    }
    return max / k;
};
// @lc code=end

