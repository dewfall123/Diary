/*
 * @lc app=leetcode id=695 lang=javascript
 *
 * [695] Max Area of Island
 */

// @lc code=start
/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxAreaOfIsland = function(grid) {
    if (!grid.length) {
        return;
    }
    let max = 0;
    function dp(x, endX, y, endY) {
        if (endY >= grid.length || endX >= grid[0].length) {
            return;
        }
        let j = endY;
        let i = x;
        while (i <= endX) {
            if (!grid[j][i]) {
                return;
            }
            i++;
        }
        i--;
        while(j >= y) {
            if (!grid[j][i]) {
                return;
            }
            j--;
        }
        const area = (endY - y + 1) * (endX - x + 1);
        max < area && (max = area);
        dp(x, endX, y, endY + 1);
        dp(x, endX + 1, y, endY);
    }
    for (let y = 0; y < grid.length; y++) {
        for (let x = 0; x < grid[y].length; x++) {
            dp(x, x, y, y);
        }
    }
    return max;
};
maxAreaOfIsland([
    [1,1,0,1,1],
    [1,0,0,0,0],
    [0,0,0,0,1],
    [1,1,0,1,1]]
);
// @lc code=end

