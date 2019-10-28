/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function(root) {
    let max = 0;
    if (!root) {
        return 0;
    }
    function dp(node, count) {
        if (!node) {
            (count > max) && (max = count);
            return;
        }
        dp(node.left, count + 1);
        dp(node.right, count + 1);
        return;
    }
    dp(root, 0);
    return max;
};