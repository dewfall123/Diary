/*
 * @lc app=leetcode id=1009 lang=javascript
 *
 * [1009] Complement of Base 10 Integer
 */

// @lc code=start
/**
 * @param {number} N
 * @return {number}
 */
var bitwiseComplement = function(N) {
    const str = N.toString(2);
    let result = '';
    for (let c of str) {
        result += c === '0' ? '1' : '0';
    }
    return +`0b${result}`;
};
// @lc code=end

