/*
 * @lc app=leetcode id=713 lang=javascript
 *
 * [713] Subarray Product Less Than K
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var numSubarrayProductLessThanK = function(nums, k) {
    if (k <= 1 || !nums.length) {
        return 0;
    }
    let count = 0;
    let i = 0;
    let j = 0;
    let product = 1;
    while (j < nums.length) {
        product *= nums[j];
        while (product >= k) {
            product /= nums[i];
            i++;
        }
        count += j - i + 1;
        j++;
    }
    return count;
};

numSubarrayProductLessThanK([1,1,1], 2);
// @lc code=end

