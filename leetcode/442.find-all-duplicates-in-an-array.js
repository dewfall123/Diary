/*
 * @lc app=leetcode id=442 lang=javascript
 *
 * [442] Find All Duplicates in an Array
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDuplicates = function(nums) {
    let result = [];
    function swap(index1, index2) {
        let temp = nums[index1];
        nums[index1] = nums[index2];
        nums[index2] = temp;
    }
    for (let i = 0; i < nums.length; i++) {
        nums[i]--;
    }
    for (let i = 0; i < nums.length; i++) {
        while(nums[i] !== i && nums[i] !== nums[nums[i]]) {
            swap(i, nums[i]);
        }
    }
    for (let i = 0; i < nums.length; i++) {
        if (i !== nums[i]) {
            result.push(nums[i] + 1);
        }
    }
    return result;
};

findDuplicates([5,4,6,7,9,3,10,9,5,6]);
// @lc code=end

