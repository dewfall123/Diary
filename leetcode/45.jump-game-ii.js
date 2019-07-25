/*
 * @lc app=leetcode id=45 lang=javascript
 *
 * [45] Jump Game II
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function(nums) {
    if (!nums.length) {
        return 0;
    }
    let minStep = Number.MAX_VALUE;
    function jumpfun(index, count) {
        if (index >= nums.length - 1) {
            minStep > count && ( minStep = count );
            return;
        }
        for (let i = 1; i <= nums[index]; i++) {
            jumpfun(index + i, count + 1);
        }
    }
    jumpfun(0, 0);
    return minStep;
};

jump([2,3,1,1,4]);
