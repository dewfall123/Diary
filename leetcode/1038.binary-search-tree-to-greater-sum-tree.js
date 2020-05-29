/*
 * @lc app=leetcode id=1038 lang=javascript
 *
 * [1038] Binary Search Tree to Greater Sum Tree
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
 * @return {TreeNode}
 */
var bstToGst = function (root) {
  const arr = [];
  function traverse(node) {
    if (!node) {
      return;
    }
    traverse(node.left);
    arr.push(node);
    traverse(node.right);
  }

  traverse(root);

  for (let i = arr.length - 1; i >= 0; i--) {
    const node = arr[i];
    const nextNode = arr[i + 1];

    node.val = nextNode ? nextNode.val + node.val : node.val;
  }

  return root;
};
// @lc code=end
