/*
 * @lc app=leetcode id=34 lang=javascript
 *
 * [34] Find First and Last Position of Element in Sorted Array
 */
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
    if (!nums.length) {
        return [ -1, -1, ];
    }
    function halfFind(start, end) {
        if (start > end) {
            return -1;
        }
        const index =  Math.floor((start + end) / 2);
        if (nums[index] === target) {
            return index;
        }
        if (target < nums[index]) {
            return halfFind(start, index - 1);
        } else {
            return halfFind(index + 1, end);
        }
    }
    const index = halfFind(0, nums.length - 1);
    if (index < 0) {
        return [ -1, -1 ];
    }
    let startIndex = index;
    while(startIndex >= 1 && nums[startIndex - 1] === target) {
        startIndex--;
    }
    let endIndex = index;
    while (endIndex <= nums.length - 2 && nums[endIndex + 1] === target) {
        endIndex++;
    }
    return [ startIndex, endIndex, ];
};

