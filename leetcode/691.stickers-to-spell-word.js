/*
 * @lc app=leetcode id=691 lang=javascript
 *
 * [691] Stickers to Spell Word
 */

// @lc code=start
/**
 * @param {string[]} stickers
 * @param {string} target
 * @return {number}
 */
var minStickers = function (stickers, target) {
  target = target.split("").sort().join("");
  const dp = { "": 0 };
  function backtrack(target) {
    if (dp[target] !== undefined) {
      return dp[target];
    }
    let min = Number.MAX_VALUE;
    for (const stiker of stickers) {
      let leftStr = "";
      const stikerCharts = stiker.split("");
      for (let c of target) {
        const index = stikerCharts.indexOf(c);
        if (index >= 0) {
          stikerCharts[index] = "";
        } else {
          leftStr += c;
        }
      }
      if (leftStr.length === target.length) {
        continue;
      }
      const count = backtrack(leftStr) + 1;
      if (count < min) {
        min = count;
      }
    }
    dp[target] = min;
    return min;
  }
  let min = backtrack(target);
  if (min === Number.MAX_VALUE) {
    min = -1;
  }
  return min;
};
// @lc code=end

minStickers(["notice", "possible"], "basicbasic");
