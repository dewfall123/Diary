/*
 * @lc app=leetcode id=414 lang=javascript
 *
 * [414] Third Maximum Number
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var thirdMax = function(nums) {
    let stack = [];
    for (let i of nums) {
        if (stack.includes(i)) {
            continue;
        }
        if (stack.length < 3) {
            stack.push(i);
            stack.sort((a, b) => a - b)
            continue;
        }
        if (i > stack[0]) {
            if (i > stack[1]) {
                if (i > stack[2]) {
                    stack[0] = stack[1];
                    stack[1] = stack[2];
                    stack[2] = i;
                } else {
                    stack[0] = stack[1];
                    stack[1] = i;
                }
            } else {
                stack[0] = i;
            }
        }
    }
    return stack.length < 3 ? stack[stack.length - 1] : stack[0];
};
// @lc code=end

