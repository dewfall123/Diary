/*
 * @lc app=leetcode id=169 lang=javascript
 *
 * [169] Majority Element
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    let stack = [];
    for (let i of nums) {
        if (!(stack.length && stack[stack.length - 1] !== i)) {
            stack.push(i);
        } else {
            stack.length = stack.length - 1;
        }
    }
    return stack[0];
};

