/*
 * @lc app=leetcode id=111 lang=javascript
 *
 * [111] Minimum Depth of Binary Tree
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var minDepth = function (root) {
  let min = Number.MAX_VALUE;
  if (!root) {
    return 0;
  }
  function findLevel(node, level = 1) {
    if (!node.left && !node.right) {
      if (min > level) {
        min = level;
      }
      return;
    }

    node.left && findLevel(node.left, level + 1);
    node.right && findLevel(node.right, level + 1);
  }

  findLevel(root);
  return min;
};
// @lc code=end
