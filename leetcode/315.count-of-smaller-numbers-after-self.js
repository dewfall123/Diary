/*
 * @lc app=leetcode id=315 lang=javascript
 *
 * [315] Count of Smaller Numbers After Self
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var countSmaller = function (nums) {
  function Node(i) {
    this.val = i;
    this.dup = 1;
    this.leftCount = 0;
    this.left = null;
    this.right = null;
  }

  const results = [];
  let root = null;

  function insertBst(val, node, sCount = 0) {
    if (!node) {
      node = new Node(val);
      results.unshift(sCount);
    } else if (val === node.val) {
      node.dup++;
      results.unshift(sCount + node.leftCount);
    } else if (val > node.val) {
      node.right = insertBst(val, node.right, sCount + node.dup + node.leftCount);
    } else {
      node.leftCount++;
      node.left = insertBst(val, node.left, sCount);
    }
    return node;
  }

  for (let i = nums.length - 1; i >= 0; i--) {
    const val = nums[i];
    root = insertBst(val, root);
  }

  return results;
};
// @lc code=end
countSmaller([5,2,6,1]);
