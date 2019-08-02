/*
 * @lc app=leetcode id=64 lang=javascript
 *
 * [64] Minimum Path Sum
 */
/**
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function(grid) {
    if (!grid.length) {
        return 0;
    }
    const dp = [];
    for (let y = 0; y < grid.length; y++) {
        dp[y] = [];
        for (let x = 0; x < grid[y].length; x++) {
            dp[y][x] = grid[y][x];
            if (x && y) {
                dp[y][x] += Math.min(dp[y][x - 1], dp[y - 1][x]);
            } else if (x && !y) {
                dp[y][x] += dp[y][x - 1];
            } else if (!x && y) {
                dp[y][x] += dp[y - 1][x];
            }
        }
    }
    return dp[grid.length - 1][grid[0].length - 1]
};

