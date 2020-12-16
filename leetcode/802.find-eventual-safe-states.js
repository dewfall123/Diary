/*
 * @lc app=leetcode id=802 lang=javascript
 *
 * [802] Find Eventual Safe States
 */

// @lc code=start
/**
 * @param {number[][]} graph
 * @return {number[]}
 */
var eventualSafeNodes = function (graph) {
  const N = graph.length;

  const colors = new Array(N).fill(0);

  function isSafe(i) {
    if (colors[i] !== 0) {
      return colors[i] === 2;
    }

    colors[i] = 1;
    for (const next of graph[i]) {
      if (!isSafe(next)) {
        return false;
      }
    }
    colors[i] = 2;
    return true;
  }

  const results = [];
  for (let i = 0; i < N; i++) {
    if (isSafe(i)) {
      results.push(i);
    }
  }

  return results;
};
// @lc code=end
eventualSafeNodes([[0], [2, 3, 4], [3, 4], [0, 4], []]);
