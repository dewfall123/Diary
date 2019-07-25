/*
 * @lc app=leetcode id=33 lang=javascript
 *
 * [33] Search in Rotated Sorted Array
 */
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
// 拟人
var search = function(nums, target) {
    if (!nums.length) {
        return -1;
    }
    function binarySearch(start, end) {
        if (start >= end) {
            return nums[start] === target ? start : -1;
        }
        if (target < nums[start] || target > nums[end]) {
            return -1;
        }
        const index = Math.floor((start + end) / 2);
        const middleValue = nums[index];
        if (target === middleValue) {
            return index;
        }
        if(target > middleValue) {
            return binarySearch(index + 1, end);
        } else {
            return binarySearch(start, index - 1);
        }
    }

    function halfSearch(start, end) {
        if (start >= end) {
            return nums[start] === target ? start: -1;
        }
        if (nums[start] < nums[end]) {
            return binarySearch(start, end);
        }
        const index = Math.floor((start + end) / 2);
        if (target === nums[index]) {
            return index;
        }
        if (nums[start] <= nums[index]) { // 左边平滑
            if (target < nums[index] && target >= nums[start]) {
                return binarySearch(start, index - 1);
            } else {
                return halfSearch(index + 1, end);
            }
        } else { // 右边平滑
            if (target > nums[index] && target <= nums[end]) {
                return binarySearch(index + 1, end);
            } else {
                return halfSearch(start, index - 1);
            }
        }
    }
    return halfSearch(0, nums.length - 1);
};

console.log(search([3, 5, 1], 3));