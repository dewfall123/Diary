/*
 * @lc app=leetcode id=140 lang=javascript
 *
 * [140] Word Break II
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {string[]}
 */
var wordBreak = function(s, wordDict) {
    function isWord(str) {
        return wordDict.includes(str);
    }

    const result = [];
    let cur = [];
    const map = new Map();
    function backtrack(index = 0) {
        if (index >= s.length) {
            result.push(cur.join(' '));
            return;
        }
        for (let i = index + 1; i <= s.length; i++) {
            const str = s.slice(index, i);
            if (isWord(str)) {
                cur.push(str);
                backtrack(i);
                cur.pop();
            }
        }
    }
    backtrack();
    return result;
};
// @lc code=end
wordBreak('catsanddog', ["cat", "cats", "and", "sand", "dog"])
