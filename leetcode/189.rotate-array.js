/*
 * @lc app=leetcode id=189 lang=javascript
 *
 * [189] Rotate Array
 */
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
    while (k) {
        let temp = nums[nums.length - 1];
        let i = nums.length - 1;
        while (i) {
            nums[i] = nums[i - 1];
            i--;
        }
        nums[0] = temp;
        k--;
    }
};

