/*
 * @lc app=leetcode id=107 lang=javascript
 *
 * [107] Binary Tree Level Order Traversal II
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
 * @return {number[][]}
 */
var levelOrderBottom = function (root) {
  const result = [];
  let nodes = [root];
  while (nodes.length) {
    const nextNodes = [];
    const vals = [];
    for (const node of nodes) {
      if (node) {
        node.left && nextNodes.push(node.left);
        node.right && nextNodes.push(node.right);
        vals.push(node.val);
      }
    }
    nodes = nextNodes;
    vals.length && result.unshift(vals);
  }
  return result;
};
// @lc code=end
