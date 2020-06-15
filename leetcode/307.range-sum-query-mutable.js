/*
 * @lc app=leetcode id=307 lang=javascript
 *
 * [307] Range Sum Query - Mutable
 */

// @lc code=start
/**
 * @param {number[]} nums
 */
var NumArray = function (nums) {
  for (let i = nums.length; i > 0; i--) {
    nums[i] = nums[i - 1];
  }
  this.nums = nums;
  this.tree = [];
  for (let i = 1; i <= nums.length; i++) {
    let r = i & -i;
    let start = i - r + 1;
    let sum = 0;
    while (start <= i) {
      sum += nums[start];
      start++;
    }
    this.tree[i] = sum;
  }
  this.tree[0] = 0;
};

/**
 * @param {number} i
 * @param {number} val
 * @return {void}
 */
NumArray.prototype.update = function (i, val) {
  i++;
  while (i < this.tree.length) {
    this.tree[i] += val - this.nums[i];
    i += i & -i;
  }
};

/**
 * @param {number} i
 * @param {number} j
 * @return {number}
 */
NumArray.prototype.sumRange = function (i, j) {
  return this.sum(j + 1) - this.sum(i);
};

NumArray.prototype.sum = function (i) {
  let sum = 0;
  while (i > 0) {
    sum += this.tree[i];
    i -= i & -i;
  }
  return sum;
};

/**
 * Your NumArray object will be instantiated and called as such:
 * var obj = new NumArray(nums)
 * obj.update(i,val)
 * var param_2 = obj.sumRange(i,j)
 */
// @lc code=end

let n = new NumArray([1, 3, 5]);
n.sumRange(0, 2);
n.update(1, 2);
n.sumRange(0, 2);
