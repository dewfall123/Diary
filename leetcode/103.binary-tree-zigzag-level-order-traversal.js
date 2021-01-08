/*
 * @lc app=leetcode id=103 lang=javascript
 *
 * [103] Binary Tree Zigzag Level Order Traversal
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
var zigzagLevelOrder = function(root) {
    const result = [];
    let nodes = [root];
    let flag = true;
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
      vals.length && result.push(flag ? vals : vals.reverse());
      flag = !flag;
    }
    return result;
};
// @lc code=end

