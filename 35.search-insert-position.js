/*
 * @lc app=leetcode id=35 lang=javascript
 *
 * [35] Search Insert Position
 */
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    if (!nums.length) {
        return 0;
    }
    function binarySearch(start, end) {
        if (start > end) {
            return start;
        }
        const index = Math.floor((start + end) / 2);
        if (target === nums[index]) {
            return index;
        }
        if (target < nums[index]) {
            return binarySearch(start, index - 1);
        } else {
            return binarySearch(index + 1, end);
        }
    }
    return binarySearch(0, nums.length - 1);
};

