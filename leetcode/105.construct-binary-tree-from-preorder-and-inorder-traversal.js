/*
 * @lc app=leetcode id=105 lang=javascript
 *
 * [105] Construct Binary Tree from Preorder and Inorder Traversal
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function(preorder, inorder) {
    function TreeNode(val) {
        this.val = val;
        this.left = this.right = null;
    }

    function genTree(pStart, pEnd, iStart, iEnd) {
        if (pStart > pEnd) {
            return null;
        }
        const val = preorder[pStart];
        const index = inorder.indexOf(val);
        const node = new TreeNode(val);
        const leftLength = index - iStart;
        node.left = genTree(pStart + 1, pStart + leftLength, iStart, index - 1,);
        node.right = genTree(pStart + leftLength + 1, pEnd, index + 1, iEnd);
        return node;
    }
    return genTree(0, preorder.length - 1, 0, inorder.length - 1);
};

// const a = buildTree([3,9,20,15,7], [9,3,15,20,7]);
// console.log(a);


