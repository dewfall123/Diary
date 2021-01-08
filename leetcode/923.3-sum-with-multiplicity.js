/*
 * @lc app=leetcode id=923 lang=javascript
 *
 * [923] 3Sum With Multiplicity
 */

// @lc code=start
/**
 * @param {number[]} A
 * @param {number} target
 * @return {number}
 */
var threeSumMulti = function (A, target) {
  const map = Array(101).fill(0);
  for (const i of A) {
    map[i]++;
  }

  let count = 0;

  for (let i = 0; i <= 100; i++) {
    for (let j = i; j <= 100; j++) {
      const k = target - i - j;
      if (!(map[i] && map[j] && map[k] && k >= j)) {
        continue;
      }
      
      if (i === j && j === k) {
        count += map[i] * (map[i] - 1) * (map[i] - 2) / 6;
      } else if (i === j && j < k) {
        count += map[i] * (map[i] - 1) / 2 * map[k]
      } else if (i < j && j === k) {
        count += map[j] * (map[j] - 1) / 2 * map[i]
      } else if (i < j && j < k) {
        count += map[i] * map[j] * map[k]
      }
    }
  }

  return count % (10 ** 9 + 7);
};
// @lc code=end

threeSumMulti([1, 1, 2, 2, 3, 3, 4, 4, 5, 5], 8);
