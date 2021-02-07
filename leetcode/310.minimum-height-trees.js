/*
 * @lc app=leetcode id=310 lang=javascript
 *
 * [310] Minimum Height Trees
 */

// @lc code=start
/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number[]}
 */
var findMinHeightTrees = function (n, edges) {
  const tree = {};
  for (let i = 0; i < n; i++) {
    tree[i] = {};
  }
  for (const [a, b] of edges) {
    tree[a][b] = true;
    tree[b][a] = true;
  }

  while (Object.keys(tree).length > 2) {
    const leaves = [];
    for (let i in tree) {
      if (Object.keys(tree[i]).length === 1) {
        leaves.push(i);
      }
    }

    for (const l of leaves) {
      const neighbors = Object.keys(tree[l]);
      for (const neighbor of neighbors) {
        delete tree[neighbor][l];
      }
      delete tree[l];
    }
  }

  return Object.keys(tree);
};
// @lc code=end
findMinHeightTrees(4, [
  [1, 0],
  [1, 2],
  [1, 3],
]);
