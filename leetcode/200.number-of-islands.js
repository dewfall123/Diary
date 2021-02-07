/*
 * @lc app=leetcode id=200 lang=javascript
 *
 * [200] Number of Islands
 */

// @lc code=start
/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function (grid) {
  if (!grid.length || !grid[0].length) {
    return 0;
  }

  const yL = grid.length;
  const xL = grid[0].length;

  const steps = [
    [1, 0],
    [-1, 0],
    [0, 1],
    [0, -1],
  ];

  function isLegal(y, x) {
    return y >= 0 && y < yL && x >= 0 && x <= xL;
  }

  let tag = 2;

  function dfs(y, x) {
    if (grid[y][x] !== "1") {
      return;
    }
    grid[y][x] = tag;
    for (const [sY, sX] of steps) {
      const nextY = y + sY;
      const nextX = x + sX;
      if (isLegal(nextY, nextX)) {
        dfs(nextY, nextX);
      }
    }
  }

  for (let j = 0; j < yL; j++) {
    for (let i = 0; i < xL; i++) {
      if (grid[j][i] === "1") {
        dfs(j, i);
        tag++;
      }
    }
  }

  return tag - 2;
};
// @lc code=end
