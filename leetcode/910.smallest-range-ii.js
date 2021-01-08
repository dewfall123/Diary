/*
 * @lc app=leetcode id=910 lang=javascript
 *
 * [910] Smallest Range II
 */

// @lc code=start
/**
 * @param {number[]} A
 * @param {number} K
 * @return {number}
 */
var smallestRangeII = function (A, K) {
  A.sort((i, j) => i - j)

  let max = A[A.length - 1]
  let min = A[0]
  let result = max - min;

  for (let i = 0; i < A.length - 1; i++) {
    max = Math.max(A[i] + 2 * K, A[A.length - 1])
    min = Math.min(A[i + 1], A[0] + 2 * K)
    result = Math.min(result, max - min)
  }

  return result;
};
// @lc code=end

smallestRangeII([7, 8, 8], 5);
