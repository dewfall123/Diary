/*
 * @lc app=leetcode id=101 lang=javascript
 *
 * [101] Symmetric Tree
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
 * @return {boolean}
 */
var isSymmetric = function (root) {
  let nodes = [root];
  while (nodes.length) {
    let nextNodes = [];
    let vals = [];
    for (const node of nodes) {
      vals.push(node ? node.val : node);
      if (node) {
        nextNodes.push(node.left, node.right);
      }
    }

    for (let i = 0; i < Math.floor(vals.length / 2); i++) {
      if (vals[i] !== vals[vals.length - 1 - i]) {
        return false;
      }
    }
    nodes = nextNodes;
  }

  return true;
};
// @lc code=end
