/*
 * @lc app=leetcode id=872 lang=javascript
 *
 * [872] Leaf-Similar Trees
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
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {boolean}
 */
var leafSimilar = function(root1, root2) {
    function leaf(root) {
        if (!root) {
            return '';
        }
        if (!root.left && !root.right) {
            return root.val + '';
        }
        return [leaf(root.left), leaf(root.right)].filter(Boolean).join('-');
    }

    return leaf(root1) === leaf(root2);
};
// @lc code=end

function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
}
const node_0 = new TreeNode(1)
const node_1 = new TreeNode(1)
const node2 = new TreeNode(2)
const node3 = new TreeNode(3)

node_0.left = node2;
node_0.right = node3;

node_1.left = node3;
node_1.right = node2;

leafSimilar(node_0, node_1);
