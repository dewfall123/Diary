/*
 * @lc app=leetcode id=230 lang=javascript
 *
 * [230] Kth Smallest Element in a BST
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
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function(root, k) {
    let index = -1;
    let result = -1;
    function traverse(node) {
        node.left && traverse(node.left);
        index > 0 && index++;
        if (index === -1 && !node.left) {
            index = 1;
        }
        if (index === k) {
            result = node.val;
        }
        node.right && traverse(node.right);
    }
    traverse(root);
    return result;
};
// @lc code=end

