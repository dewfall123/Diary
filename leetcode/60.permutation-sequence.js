/*
 * @lc app=leetcode id=60 lang=javascript
 *
 * [60] Permutation Sequence
 *
 * https://leetcode.com/problems/permutation-sequence/description/
 *
 * algorithms
 * Medium (35.26%)
 * Likes:    1251
 * Dislikes: 292
 * Total Accepted:    169.2K
 * Total Submissions: 475.2K
 * Testcase Example:  '3\n3'
 *
 * The set [1,2,3,...,n] contains a total of n! unique permutations.
 * 
 * By listing and labeling all of the permutations in order, we get the
 * following sequence for n = 3:
 * 
 * 
 * "123"
 * "132"
 * "213"
 * "231"
 * "312"
 * "321"
 * 
 * 
 * Given n and k, return the k^th permutation sequence.
 * 
 * Note:
 * 
 * 
 * Given n will be between 1 and 9 inclusive.
 * Given k will be between 1 and n! inclusive.
 * 
 * 
 * Example 1:
 * 
 * 
 * Input: n = 3, k = 3
 * Output: "213"
 * 
 * 
 * Example 2:
 * 
 * 
 * Input: n = 4, k = 9
 * Output: "2314"
 * 
 * 
 */

// @lc code=start
/**
 * @param {number} n
 * @param {number} k
 * @return {string}
 */
var getPermutation = function(n, k) {
    let str = '';
    function multiply(n) {
        let result = 1;
        for (let i = 2; i <= n; i++) {
            result *= i;
        }
        return result;
    }

    const leftNums = Object.keys(new Array(n).fill(0)).map(i => +i + 1);
    k--;

    while (str.length < n) {
        const percount = multiply(n - str.length - 1);
        const index = Math.floor(k / percount);

        str += leftNums[index];
        leftNums.splice(index, 1);
        k = k % percount;
    }
    return str;
};
// @lc code=end
getPermutation(4, 6);
