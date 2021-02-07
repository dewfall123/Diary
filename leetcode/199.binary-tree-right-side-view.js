/*
 * @lc app=leetcode id=199 lang=javascript
 *
 * [199] Binary Tree Right Side View
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
 * @return {number[]}
 */
var rightSideView = function (root) {
  const result = [];
  let nodes = [root];
  while (nodes.length) {
    const vals = [];
    const nextNodes = [];
    for (const node of nodes) {
      if (node) {
        vals.push(node.val);
        nextNodes.push(node.left, node.right);
      }
    }
    nodes = nextNodes;
    vals.length && result.push(vals[vals.length - 1]);
  }

  return result;
};
// @lc code=end
