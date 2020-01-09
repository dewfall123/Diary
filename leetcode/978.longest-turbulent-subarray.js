/*
 * @lc app=leetcode id=978 lang=javascript
 *
 * [978] Longest Turbulent Subarray
 */

// @lc code=start
/**
 * @param {number[]} A
 * @return {number}
 */
var maxTurbulenceSize = function(A) {
    if (!A.length) {
        return 0;
    }
    let max = 0;
    let sorts = [];
    for (let i = 0; i < A.length - 1; i++) {
        const s = A[i] > A[i + 1] ? '>' : (A[i] === A[i + 1] ? '=' : '<');
        sorts.push(s);
    }
    let count = 0;
    let last = '';
    for (let s of sorts) {
        if (s === '=') {
            count = 0;
            last = '=';
            continue;
        }
        if (last !== s) {
            count++;
        } else {
            count = 1;
        }
        last = s;
        max < count && (max = count);
    }
    return max + 1;
};

maxTurbulenceSize([9,9]);
// @lc code=end

