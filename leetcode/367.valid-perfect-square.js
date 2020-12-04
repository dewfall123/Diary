/*
 * @lc app=leetcode id=367 lang=javascript
 *
 * [367] Valid Perfect Square
 */

// @lc code=start
/**
 * @param {number} num
 * @return {boolean}
 */
var isPerfectSquare = function (num) {
  if (num === 1) {
    return true;
  }
  const half = Math.ceil(num / 2);
  for (let i = 0; i <= half; i++) {
    if (i * i === num) {
      return true;
    }
  }
  return false;
};
// @lc code=end
