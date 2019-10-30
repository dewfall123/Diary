/*
 * @lc app=leetcode id=581 lang=javascript
 *
 * [581] Shortest Unsorted Continuous Subarray
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var findUnsortedSubarray = function(nums) {
    const copyNums = [ ...nums ].sort((a, b) => a - b);
    let i = 0;
    let j = nums.length - 1;
    while (i < nums.length && nums[i] === copyNums[i]) {
        i++;
    }
    while (j >= 0 && nums[j] === copyNums[j]) {
        j--;
    }
    return Math.max(0, j - i + 1);
};

findUnsortedSubarray([2,6,4,8,10,9,15]);
// @lc code=end

