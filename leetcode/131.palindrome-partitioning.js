/*
 * @lc app=leetcode id=131 lang=javascript
 *
 * [131] Palindrome Partitioning
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string[][]}
 */
var partition = function(s) {
    function isPalindrome(str) {
        let result = true;
        const l = str.length;
        for (let i = 0; i < l / 2; i++) {
            if (str[i] !== str[l - 1 - i]) {
                return false;
            }
        }
        return result;
    }

    let result = [];
    let cur = [];
    function backtrack(index = 0) {
        if (index === s.length) {
            result.push([...cur]);
            return;
        }
        for (let i = index; i < s.length; i++) {
            const str = s.slice(index, i + 1);
            if (isPalindrome(str)) {
                cur.push(str);
                backtrack(i + 1);
                cur.pop();
            }
        }
    }
    backtrack();
    return result;
};
// @lc code=end
partition('aab');
