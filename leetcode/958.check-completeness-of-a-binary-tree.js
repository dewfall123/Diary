/*
 * @lc app=leetcode id=958 lang=javascript
 *
 * [958] Check Completeness of a Binary Tree
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

// function TreeNode(val) {
//     this.val = val;
//     this.left = this.right = null;
// }
// const n1 = new TreeNode(1);
// const n2 = new TreeNode(2);
// const n3 = new TreeNode(3);
// const n4 = new TreeNode(4);
// const n5 = new TreeNode(5);
// const n7 = new TreeNode(7);

// n1.left = n2;
// n1.right = n3;

// n2.left = n4;
// n2.right = n5;

// n3.right = n7;
// const root = n1;


/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isCompleteTree = function(root) {
    let list = [ root ];
    while (list.length) {
        let nextList = [];
        let isFull = true;
        let status = 0;
        let isLeft = true;
        for (let node of list) {
            if (node) {
                nextList.push(node.left, node.right);
                if (status === -1) {
                    isLeft = false;
                }
                status = 1;
            } else {
                isFull = false;
                status = -1;
            }
        }
        let hasNext = nextList.filter(i => i && i.val).length;
        if (hasNext) {
            if (!isFull) {
                return false;
            }
        } else {
            return isLeft;
        }
        list = nextList;
    }
    return true;
};
// @lc code=end

isCompleteTree(root);

