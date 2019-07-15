/*
 * @lc app=leetcode id=41 lang=javascript
 *
 * [41] First Missing Positive
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
var firstMissingPositive = function(nums) {
    if (!nums.length) {
        return 1;
    }
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] > 0 && nums[i] < nums.length && nums[i] !== nums[ nums[i] - 1 ]) {
            let temp = nums[nums[i] - 1];
            nums[nums[i] - 1] = nums[i];
            nums[i] = temp;
            i--;
        }
    }
    for (let i = 0; i < nums.length; i++) {
        if (i + 1 !== nums[i]) {
            return i + 1;
        }
    }
    return nums[nums.length - 1] + 1;
};

firstMissingPositive([1, 1]);

