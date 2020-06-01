/*
 * @lc app=leetcode id=218 lang=javascript
 *
 * [218] The Skyline Problem
 */

// @lc code=start
/**
 * @param {number[][]} buildings
 * @return {number[][]}
 */
var getSkyline = function (buildings) {
  const result = [];
  const stack = [];
  for(const build of buildings) {
    const [left, right, height] = build;
    const last = stack[stack.length - 1] || 0;
    if (height === last) {

    } else if (height > last) {
        result.push([  ])
    }
  }

  return result;
};
// @lc code=end

getSkyline([
  [2, 9, 10],
  [3, 7, 15],
  [5, 12, 12],
  [15, 20, 10],
  [19, 24, 8],
]);
