/*
 * @lc app=leetcode id=947 lang=javascript
 *
 * [947] Most Stones Removed with Same Row or Column
 */

// @lc code=start
/**
 * @param {number[][]} stones
 * @return {number}
 */
var removeStones = function (stones) {
  let count = 0;

  function marketStones(y, x, n = 0) {
    for (let index = 0; index < stones.length; index++) {
      const [j, i, removed] = stones[index];
      if (!removed && (y === j || x === i)) {
        stones[index][2] = 1;
        n++;
        if (!(y === j && x === i)) {
          n += marketStones(j, i);
        }
      }
    }

    return n;
  }

  for (const [y, x, removed] of stones) {
    if (!removed) {
      const n = marketStones(y, x);
      if (n > 1) {
        count += n - 1;
      }
    }
  }

  return count;
};
// @lc code=end

removeStones([
  [4, 5],
  [0, 4],
  [0, 5],
  [4, 3],
  [2, 2],
  [5, 1],
  [0, 3],
  [2, 4],
  [4, 0],
]);
