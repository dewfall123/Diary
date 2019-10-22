/*
 * @lc app=leetcode id=495 lang=javascript
 *
 * [495] Teemo Attacking
 */

// @lc code=start
/**
 * @param {number[]} timeSeries
 * @param {number} duration
 * @return {number}
 */
var findPoisonedDuration = function(timeSeries, duration) {
    if (!timeSeries.length || !duration) {
        return 0;
    }
    let count = 0;
    for (let i = 0; i < timeSeries.length; i++) {
        if (i < timeSeries.length && timeSeries[i] + duration > timeSeries[i + 1]) {
            count += timeSeries[i + 1] - timeSeries[i];
        } else {
            count += duration;
        }
    }
    return count;
};
// @lc code=end

