/*
 * @lc app=leetcode id=75 lang=javascript
 *
 * [75] Sort Colors
 */
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function(nums) {
    let temp = null;
    const swap = (i, j) => {
        if (i === j) {
            return;
        }
        temp = nums[i];
        nums[i] = nums[j];
        nums[j] = temp;
    };
    let start = 0;
    let end = nums.length - 1;
    let i = 0;
    while (i <= end) {
        if (nums[i] === 0) {
            swap(start++, i);
            i++;
        } else if (nums[i] === 2) {
            swap(end--, i);
        } else if (nums[i] === 1) {
            i++;
        }
    }
};

sortColors([2,0,1]);

