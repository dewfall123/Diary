/*
 * @lc app=leetcode id=485 lang=javascript
 *
 * [485] Max Consecutive Ones
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function(nums) {
    let max = 0;
    let lastCount = 0;
    for (let i of nums) {
        if (i === 1) {
            lastCount++;
        } else {
            lastCount = 0;
        }
        lastCount > max && ( max = lastCount );
    }
    return max;
};
// @lc code=end

