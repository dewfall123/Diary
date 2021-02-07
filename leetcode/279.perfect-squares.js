/*
 * @lc app=leetcode id=279 lang=javascript
 *
 * [279] Perfect Squares
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var numSquares = function (n) {
  const cache = {};

  function dp(x) {
    if (x === 0) {
      return 0;
    }
    if (x === 1) {
      return 1;
    }
    if (cache[x]) {
      return cache[x];
    }
    let min = x;
    for (let i = 1; i * i <= x; i++) {
      const a = 1 + dp(x - i * i);
      if (min > a) {
        min = a;
      }
    }
    cache[x] = min;
    return min;
  }

  return dp(n);
};
// @lc code=end
console.log(numSquares(12));
