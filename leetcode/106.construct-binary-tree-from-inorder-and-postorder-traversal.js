/*
 * @lc app=leetcode id=106 lang=javascript
 *
 * [106] Construct Binary Tree from Inorder and Postorder Traversal
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} inorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */
// function TreeNode(val) {
//     this.val = val;
//     this.left = this.right = null;
// }
var buildTree = function(inorder, postorder) {
    function genTree(iStart, iEnd, pStart, pEnd) {
        if (iStart > iEnd) {
            return null;
        }
        let val = postorder[pEnd];
        const node = new TreeNode(val);
        const index = inorder.indexOf(val);
        const leftLength = index - iStart;
        node.left = genTree(iStart, index - 1, pStart, pStart + leftLength - 1);
        node.right = genTree(index + 1, iEnd, pStart + leftLength, pEnd - 1);
        return node;
    }
    return genTree(0, inorder.length - 1, 0, postorder.length - 1);
};

// let a = buildTree([9,3,15,20,7], [9,15,7,20,3]);
// debugger;

