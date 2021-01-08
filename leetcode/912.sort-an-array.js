/*
 * @lc app=leetcode id=912 lang=javascript
 *
 * [912] Sort an Array
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArray = function (nums) {
  const bucket = [];
  for (const i of nums) {
    bucket[i + 50000] = (bucket[i + 50000] ?? 0) + 1;
  }
  nums = [];
  for (let i = 0; i < bucket.length; i++) {
    if (bucket[i]) {
      let j = bucket[i];
      while (j > 0) {
        nums.push(i - 50000);
        j--;
      }
    }
  }
  return nums;
};
// @lc code=end

sortArray([5, 1, 1, 2, 0, 0]);
