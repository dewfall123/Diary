/*
 * @lc app=leetcode id=46 lang=javascript
 *
 * [46] Permutations
 *
 * https://leetcode.com/problems/permutations/description/
 *
 * algorithms
 * Medium (60.24%)
 * Likes:    3242
 * Dislikes: 95
 * Total Accepted:    537K
 * Total Submissions: 881.7K
 * Testcase Example:  '[1,2,3]'
 *
 * Given a collection of distinct integers, return all possible permutations.
 * 
 * Example:
 * 
 * 
 * Input: [1,2,3]
 * Output:
 * [
 * ⁠ [1,2,3],
 * ⁠ [1,3,2],
 * ⁠ [2,1,3],
 * ⁠ [2,3,1],
 * ⁠ [3,1,2],
 * ⁠ [3,2,1]
 * ]
 * 
 * 
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
    const result = [];
    function bt(cur = []) {
        if (cur.length === nums.length) {
            result.push(cur);
            return;
        }
        for (const i of nums) {
            if (!cur.includes(i)) {
                bt([...cur, i]);
            }
        }
    }
    bt();
    return result;
};
// @lc code=end
permute([1, 2, 3])
