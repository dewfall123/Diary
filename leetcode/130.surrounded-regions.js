/*
 * @lc app=leetcode id=130 lang=javascript
 *
 * [130] Surrounded Regions
 */

// @lc code=start
/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solve = function (board) {
  const board1 = board.map((arr) => [...arr].fill("X"));
  const yL = board.length;
  const xL = board[0]?.length;
  if (!yL || !xL) {
    return board;
  }

  function isValid(y, x) {
    return y >= 0 && y < yL && x >= 0 && x < xL;
  }

  const steps = [
    [1, 0],
    [-1, 0],
    [0, 1],
    [0, -1],
  ];

  function dfs(y, x) {
    if (board[y][x] !== "O" || board1[y][x] === "O") {
      return;
    }
    board1[y][x] = "O";
    for (const step of steps) {
      const yNext = y + step[0];
      const xNext = x + step[1];
      if (isValid(yNext, xNext)) {
        dfs(yNext, xNext);
      }
    }
  }

  for (let i = 0; i < xL; i++) {
    dfs(0, i);
    dfs(yL - 1, i);
  }

  for (let i = 0; i < yL; i++) {
    dfs(i, 0);
    dfs(i, xL - 1);
  }

  for (let y = 0; y < yL; y++) {
    for (let x = 0; x < xL; x++) {
      board[y][x] = board1[y][x];
    }
  }
};
// @lc code=end

solve([
  ["O", "O"],
  ["O", "O"],
]);
