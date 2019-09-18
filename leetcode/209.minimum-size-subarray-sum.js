/*
 * @lc app=leetcode id=209 lang=javascript
 *
 * [209] Minimum Size Subarray Sum
 */
/**
 * @param {number} s
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function(s, nums) {
    if (!nums.length) {
        return 0;
    }
    let min = Number.MAX_VALUE;
    let sum = 0;
    let i = 0;
    let j = 0;
    while (j < nums.length) {
        sum += nums[j];
        while (sum >= s) {
            min >= (j - i + 1) && (min = j - i + 1);
            sum -= nums[i];
            i++;
        }
        j++;
    }
    return min === Number.MAX_VALUE ? 0 : min;
};

minSubArrayLen(7, [2,3,1,2,4,3]);

