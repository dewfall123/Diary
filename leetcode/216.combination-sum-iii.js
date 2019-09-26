/*
 * @lc app=leetcode id=216 lang=javascript
 *
 * [216] Combination Sum III
 */
/**
 * @param {number} k
 * @param {number} n
 * @return {number[][]}
 */
var combinationSum3 = function(k, n) {
    let result = [];
    function bt(arr) {
        if (arr.length === k) {
            if (arr.reduce((count, i) => count + i) === n) {
                result.push(arr);
            }
            return;
        }
        const start = arr[arr.length - 1] || 1;
        for (let i = start; i <= 9; i++) {
            if (!arr.includes((i))) {
                bt([ ...arr, i, ])
            }
        }
    }
    bt([]);
    return result;
};

