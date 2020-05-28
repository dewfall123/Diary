/*
 * @lc app=leetcode id=1022 lang=javascript
 *
 * [1022] Sum of Root To Leaf Binary Numbers
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
var sumRootToLeaf = function(root) {
    const arr = [];
    function countTree(node, str = '') {
        if (!node) {
            return str;
        }
        let curStr = str + node.val;
        if (node.left) {
            countTree(node.left, curStr);
        }
        if (node.right) {
            countTree(node.right, curStr);
        }
        // end
        if (!node.left && !node.right) {
            arr.push(curStr);
        }
    }

    countTree(root);

    return arr.filter(Boolean).map(s => Number(`0b${s}`)).reduce((c, i) => c + i, 0);
};
// @lc code=end

