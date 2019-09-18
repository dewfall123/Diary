/*
 * @lc app=leetcode id=153 lang=javascript
 *
 * [153] Find Minimum in Rotated Sorted Array
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function(nums) {
    function findFrom(start, end) {
        if (end - start <= 1) {
            return Math.min(nums[start], nums[end]);
        }
        const mid = Math.floor((start + end) / 2);
        if (nums[end] >= nums[start]) {
            return nums[start];
        }
        if (mid - 1 >= 0 && nums[mid - 1] > nums[mid]) {
            return nums[mid];
        }
        if (nums[mid] >= nums[start]) {
            return findFrom(mid + 1, end);
        } else {
            return findFrom(start, mid - 1);
        }
    }
    return findFrom(0, nums.length - 1);
};

console.log(
    findMin([3,1,2])
);
