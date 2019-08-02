/*
 * @lc app=leetcode id=63 lang=javascript
 *
 * [63] Unique Paths II
 */
/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
var uniquePathsWithObstacles = function(obstacleGrid) {
    if (!(obstacleGrid.length && obstacleGrid[0].length)) {
        return 0;
    }
    const m = obstacleGrid.length;
    const n = obstacleGrid[0].length;
    let dp = [];
    for (let i = 0; i < m; i++) {
        dp[i] = [];
    }
    dp[0][0] = +!obstacleGrid[0][0];
    for (let i = 1; i < n; i++) {
        dp[0][i] = obstacleGrid[0][i] ? 0: dp[0][i - 1];
    }
    for (let i = 1; i < m; i++) {
        dp[i][0] = obstacleGrid[i][0] ? 0: dp[i - 1][0];
    }
    const l = Math.min(m, n);
    for (let i = 1; i < l; i++) {
        let x = i;
        let y = i;
        while (x < l) {
            dp[i][x] = obstacleGrid[i][x] ? 0 : (dp[i - 1][x] + dp[i][x - 1]);
            x++;
        }
        while (y < l) {
            dp[y][i] = obstacleGrid[y][i] ? 0 : (dp[y - 1][i] + dp[y][i - 1]);
            y++;
        }
    }
    if (m > n) {
        for (let i = n; i < m; i++) {
            let x = 1;
            let y = i;
            while(x < n) {
                dp[y][x] = obstacleGrid[y][x] ? 0 : (dp[y][x - 1] + dp[y - 1][x]);
                x++;
            }
        }
    } else {
        for (let i = m; i < n; i++) {
            let x = i;
            let y = 1;
            while (y < m) {
                dp[y][x] = obstacleGrid[y][x] ? 0 : (dp[y][x - 1] + dp[y - 1][x]);
                y++;
            }
        }
    }
    return dp[m - 1][n - 1];
};

uniquePathsWithObstacles([[0, 1]]);
