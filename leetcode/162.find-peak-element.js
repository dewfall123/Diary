/*
 * @lc app=leetcode id=162 lang=javascript
 *
 * [162] Find Peak Element
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
var findPeakElement = function(nums) {
    function halfSearch(start, end) {
        if (end <= start) {
            return start;
        }
        const mid = Math.floor((start + end) / 2);
        if (nums[mid] >= nums[mid + 1]) {
            return halfSearch(start, mid);
        } else {
            return halfSearch(mid + 1, end);
        }
    }
    return halfSearch(0, nums.length - 1);
};

