/*
 * @lc app=leetcode id=665 lang=javascript
 *
 * [665] Non-decreasing Array
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var checkPossibility = function(nums) {
    // n * n
    if (nums.length < 2) {
        return true;
    }
    // for (let i = 0; i < nums.length; i++) {
    //     let isDoDesc = true;
    //     for (let j = 1; j < nums.length; j++) {
    //         if (j === i) {
    //             continue;
    //         }
    //         if (nums[j] < nums[j - 1 === i ? i - 1: j - 1]) {
    //             isDoDesc = false;
    //             break;
    //         }
    //     }
    //     if (isDoDesc) {
    //         return true;
    //     }
    // }
    let i = 0;
    while (i + 2 < nums.length && nums[i] < nums[i + 1] && nums[i + 1] < nums[i + 2]) {
        i++;
    }
    let j = nums.length - 1;
    while (j - 2 >= 0 && nums[j - 2] < nums[j - 1] && nums[j - 1] < nums[j]) {
        j--;
    }
    return j - i < 3;
};

checkPossibility([3,4,2,3]);
// @lc code=end

