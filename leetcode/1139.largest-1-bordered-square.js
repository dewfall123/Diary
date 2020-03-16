/*
 * @lc app=leetcode id=1139 lang=javascript
 *
 * [1139] Largest 1-Bordered Square
 *
 * https://leetcode.com/problems/largest-1-bordered-square/description/
 *
 * algorithms
 * Medium (45.81%)
 * Likes:    124
 * Dislikes: 34
 * Total Accepted:    7.2K
 * Total Submissions: 15.8K
 * Testcase Example:  '[[1,1,1],[1,0,1],[1,1,1]]'
 *
 * Given a 2D grid of 0s and 1s, return the number of elements in the largest
 * square subgrid that has all 1s on its border, or 0 if such a subgrid doesn't
 * exist in the grid.
 * 
 * 
 * Example 1:
 * 
 * 
 * Input: grid = [[1,1,1],[1,0,1],[1,1,1]]
 * Output: 9
 * 
 * 
 * Example 2:
 * 
 * 
 * Input: grid = [[1,1,0,0]]
 * Output: 1
 * 
 * 
 * 
 * Constraints:
 * 
 * 
 * 1 <= grid.length <= 100
 * 1 <= grid[0].length <= 100
 * grid[i][j] is 0 or 1
 * 
 */

// @lc code=start
/**
 * @param {number[][]} grid
 * @return {number}
 */
var largest1BorderedSquare = function(grid) {
    const width = grid[0].length;
    const height = grid.length;
    const defaultValue = {x: 0, y: 0};
    // dp记录每个点在x y 方向的最大宽度
    const dp = [];
    for (let y = 0; y <= height; y++) {
        dp[y] = dp[y] || [];
        for (let x = 0; x <= width; x++) {
            dp[y][x] = {...defaultValue}
        }
    }
    let max = 0;
    for (let y = 1; y <= height; y++) {
        for (let x = 1; x <= width; x++) {
            if (grid[y - 1][x - 1]) {
                const yWidth = (dp[y - 1][x]).y + 1;
                const xWidth = (dp[y][x - 1]).x + 1;
                dp[y][x] = {x: xWidth, y: yWidth}
                const maxWidth = Math.min(yWidth, xWidth);
                for (let w = maxWidth; w > 0; w--) {
                    if (dp[y - w + 1][x].x >= w && dp[y][x - w + 1].y >= w) {
                        if (max < w) {
                            max = w;
                        }
                    }
                }
            }
        }
    }
    return max * max;
};
// @lc code=end

largest1BorderedSquare([[1,1,1],[1,0,1],[1,1,1]])
