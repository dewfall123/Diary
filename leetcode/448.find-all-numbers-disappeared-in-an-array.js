/*
 * @lc app=leetcode id=448 lang=javascript
 *
 * [448] Find All Numbers Disappeared in an Array
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function(nums) {
    for (let i = 0; i < nums.length; i++) {
        nums[i]--;
    }
    for (let i = 0; i < nums.length; i++) {
        while(nums[i] !== i && nums[i] !== nums[nums[i]]) {
            const index = nums[i];
            const temp = nums[i];
            nums[i] = nums[index];
            nums[index] = temp;
        }
    }
    let result = [];
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== i) {
            result.push(i + 1);
        }
    }
    return result;
};

findDisappearedNumbers([4,3,2,7,8,2,3,1]);
// @lc code=end

