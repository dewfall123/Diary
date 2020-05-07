/*
 * @lc app=leetcode id=77 lang=javascript
 *
 * [77] Combinations
 *
 * https://leetcode.com/problems/combinations/description/
 *
 * algorithms
 * Medium (52.03%)
 * Likes:    1258
 * Dislikes: 63
 * Total Accepted:    269K
 * Total Submissions: 508.7K
 * Testcase Example:  '4\n2'
 *
 * Given two integers n and k, return all possible combinations of k numbers
 * out of 1 ... n.
 * 
 * Example:
 * 
 * 
 * Input: n = 4, k = 2
 * Output:
 * [
 * ⁠ [2,4],
 * ⁠ [3,4],
 * ⁠ [2,3],
 * ⁠ [1,2],
 * ⁠ [1,3],
 * ⁠ [1,4],
 * ]
 * 
 * 
 */

// @lc code=start
/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function(n, k) {
    const result = [];
    let cur = [];
    function backtrack(index = 1) {
        if (cur.length === k) {
            result.push([...cur]);
            return;
        }
        for (let i = index; i <= n; i++) {
            cur.push(i);
            backtrack(i + 1);
            cur.pop();
        }
    }
    backtrack();
    return result;
};
// @lc code=end

combine(4, 2);

