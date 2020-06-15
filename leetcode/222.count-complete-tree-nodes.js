/*
 * @lc app=leetcode id=222 lang=javascript
 *
 * [222] Count Complete Tree Nodes
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
var countNodes = function (root) {
  // let count = 0;
  // function traverse(node) {
  //     if (node) {
  //         count++;
  //         traverse(node.left);
  //         traverse(node.right);
  //     }
  // }
  // traverse(root);
  // return count;
  function countLevel(node) {
    if (!node) {
      return 0;
    }
    let leftLevel = 0;
    let leftNode = node;
    while (leftNode) {
      leftLevel++;
      leftNode = leftNode.left;
    }
    let rightLevel = 0;
    let rightNode = node;
    while (rightNode) {
      rightLevel++;
      rightNode = rightNode.right;
    }
    if (leftLevel === rightLevel) {
      return 2 ** leftLevel - 1;
    }
    return 1 + countLevel(node.left) + countLevel(node.right);
  }

  return countLevel(root);
};
// @lc code=end
