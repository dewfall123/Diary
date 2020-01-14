/*
 * @lc app=leetcode id=1002 lang=javascript
 *
 * [1002] Find Common Characters
 */

// @lc code=start
/**
 * @param {string[]} A
 * @return {string[]}
 */
var commonChars = function(A) {
    const cMap = {};
    for (let i = 0;  i < A.length; i++) {
        const string = A[i];
        for (let c of string) {
            if (cMap[c]) {
                cMap[c][i]++;
            } else {
                cMap[c] = Array(A.length).fill(0);
                cMap[c][i] = 1;
            }
        }
    }
    let result = '';
    for (let c in cMap) {
        const minCount = cMap[c].reduce((min, i) => Math.min(min, i))
        if (minCount) {
            result += c.repeat(minCount);
        }
    }
    return result.split('');
};
// @lc code=end

