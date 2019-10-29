/*
 * @lc app=leetcode id=566 lang=javascript
 *
 * [566] Reshape the Matrix
 */

// @lc code=start
/**
 * @param {number[][]} nums
 * @param {number} r
 * @param {number} c
 * @return {number[][]}
 */
var matrixReshape = function(nums, r, c) {
    let columnOld = nums.length;
    if (!columnOld) {
        return nums;
    }
    let rowOld = nums[0].length;
    if (columnOld * rowOld !== r * c) {
        return nums;
    }
    let cIndex = 0;
    let rowIndex = 0;
    const next = () => {
        let result = nums[cIndex][rowIndex++];
        if (rowIndex >= rowOld) {
            rowIndex = 0;
            cIndex++;
        }
        return result;
    }
    let numsNew = [];
    for (let i = 0; i < r; i++) {
        let row = [];
        for (let j = 0; j < c; j++) {
            row.push(next());
        }
        numsNew.push(row);
    }
    return numsNew;
};
// @lc code=end

