/*
 * @lc app=leetcode id=240 lang=javascript
 *
 * [240] Search a 2D Matrix II
 */

// @lc code=start
/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
    const m = matrix.length;
    const n = matrix[0] ? matrix[0].length : 0;
    let [y, x] = [m - 1, 0];
    while (y >= 0 && x < n) {
        if (target === matrix[y][x]) {
            return true;
        } else if (target > matrix[y][x]) {
            x++;
        } else {
            y--;
        }
    }
    return false;
};
// @lc code=end

