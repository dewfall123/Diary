/*
 * @lc app=leetcode id=238 lang=javascript
 *
 * [238] Product of Array Except Self
 */
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    const output = [];
    let rightMuti = 1;
    for (let i = nums.length - 1; i >= 0; i --) {
        output[i] = rightMuti;
        rightMuti *= nums[i];
    }
    let leftMuti = 1;
    for (let i = 0; i < nums.length; i++) {
        output[i] = leftMuti * output[i];
        leftMuti *= nums[i];
    }
    return output;
};

productExceptSelf([1,2,3,4]);
