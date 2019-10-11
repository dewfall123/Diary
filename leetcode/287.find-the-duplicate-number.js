/*
 * @lc app=leetcode id=287 lang=javascript
 *
 * [287] Find the Duplicate Number
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function(nums) {
    let fast = nums[0];
    let slow = nums[0];
    do {
        fast = nums[nums[fast]];
        slow = nums[slow];
    } while (fast !== slow);
    fast = nums[0];
    while (fast !== slow) {
        fast = nums[fast];
        slow = nums[slow];
    }
    return fast;
};

findDuplicate([1,3,4,2,2]);
// @lc code=end

