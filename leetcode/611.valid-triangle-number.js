/*
 * @lc app=leetcode id=611 lang=javascript
 *
 * [611] Valid Triangle Number
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var triangleNumber = function(nums) {
    let count = 0;
    nums.sort((a, b) => a - b);
    for (let a = 0; a < nums.length - 2; a++) {
        if (!nums[a]) {
            continue;
        }
        let c = a + 2;
        for (let b = a + 1; b < nums.length - 1; b++) {
            while (c < nums.length && nums[a] + nums[b] > nums[c]) {
                c++;
            }
            count += c - b - 1;
        }
    }
    return count;
};

triangleNumber([2,2,3,4]);
// @lc code=end

