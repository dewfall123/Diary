/*
 * @lc app=leetcode id=560 lang=javascript
 *
 * [560] Subarray Sum Equals K
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraySum = function(nums, k) {
    let count = 0;
    let sum = 0;
    const map = new Map();
    map.set(0, 1);
    for (let i = 0; i < nums.length; i++) {
        sum += nums[i];
        // 找到相差K的个数
        if (map.has(sum - k)) {
            count += map.get(sum - k);
        }
        // 记住为sum有多少种组合
        map.set(sum, (map.get(sum) || 0) + 1);
    }
    return count;
};
// @lc code=end

