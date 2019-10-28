/*
 * @lc app=leetcode id=565 lang=javascript
 *
 * [565] Array Nesting
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var arrayNesting = function(nums) {
    let max = 0;
    const visitedValue = -1;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === visitedValue) {
            continue;
        }
        let count = 0;
        while (nums[i] !== visitedValue) {
            const next = nums[i];
            nums[i] = visitedValue;
            i = next;
            count++;
            count > max && ( max = count );
        }
    }
    return max;
};

arrayNesting([1,3,4,2,0]);
// @lc code=end

