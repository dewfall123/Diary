/*
 * @lc app=leetcode id=80 lang=javascript
 *
 * [80] Remove Duplicates from Sorted Array II
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    if (!nums.length) {
        return nums;
    }
    let count = 1;
    let last = nums[0];
    let i = 1;
    while (i < nums.length) {
        if (last === nums[i]) {
            count++;
        } else {
            last = nums[i];
            count = 1;
        }
        if (count > 2) {
            nums.splice(i, 1);
        } else {
            i++;
        }
    }
    return nums.length;
};

