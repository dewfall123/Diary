/*
 * @lc app=leetcode id=47 lang=javascript
 *
 * [47] Permutations II
 *
 * https://leetcode.com/problems/permutations-ii/description/
 *
 * algorithms
 * Medium (44.16%)
 * Likes:    1630
 * Dislikes: 56
 * Total Accepted:    321K
 * Total Submissions: 719.2K
 * Testcase Example:  '[1,1,2]'
 *
 * Given a collection of numbers that might contain duplicates, return all
 * possible unique permutations.
 * 
 * Example:
 * 
 * 
 * Input: [1,1,2]
 * Output:
 * [
 * ⁠ [1,1,2],
 * ⁠ [1,2,1],
 * ⁠ [2,1,1]
 * ]
 * 
 * 
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function(nums) {
    nums.sort((a, b) => a - b);
    const result = [];
    const used = new Array(nums.length).fill(false);
    const cur = [];
    function backtrack() {
        if (cur.length === nums.length) {
            return result.push([...cur]);
        }
        for (let i = 0; i < nums.length; i++) {
            if (used[i]) {
                continue;
            }
            while (i + 1 < nums.length && !used[i + 1] && nums[i] === nums[i + 1]) {
                i++;
            }
            used[i] = true;
            cur.push(nums[i]);
            backtrack()
            cur.pop();
            used[i] = false;
        }
    }
    backtrack();
    return result;
};
// @lc code=end

permuteUnique([1, 1, 1, 2])