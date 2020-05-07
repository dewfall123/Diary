/*
 * @lc app=leetcode id=22 lang=javascript
 *
 * [22] Generate Parentheses
 *
 * https://leetcode.com/problems/generate-parentheses/description/
 *
 * algorithms
 * Medium (59.74%)
 * Likes:    4317
 * Dislikes: 235
 * Total Accepted:    485.9K
 * Total Submissions: 806.5K
 * Testcase Example:  '3'
 *
 * 
 * Given n pairs of parentheses, write a function to generate all combinations
 * of well-formed parentheses.
 * 
 * 
 * 
 * For example, given n = 3, a solution set is:
 * 
 * 
 * [
 * ⁠ "((()))",
 * ⁠ "(()())",
 * ⁠ "(())()",
 * ⁠ "()(())",
 * ⁠ "()()()"
 * ]
 * 
 */

// @lc code=start
/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
    let parentheses = [];
    function permutation(str = '') {
        if (str.length === n * 2) {
            parentheses.push(str);
            return;
        }
        let leftCount = 0;
        let rightCount = 0;
        for (let c of str) {
            c === '(' ? leftCount++ : rightCount++;
        }
        leftCount < n && permutation(str + '(');
        rightCount < n && permutation(str + ')');
    }
    permutation();

    function isWellFormed(str) {
        const stack = [];
        for (let c of str) {
            if (c === '(') {
                stack.push(c);
                continue;
            }
            const preP = stack.pop();
            if (!preP || preP === ')') {
                return false;
            }
        }
        return true;
    }

    const result = parentheses.filter(isWellFormed);
    return result;
};
// @lc code=end
generateParenthesis(3);

