/*
 * @lc app=leetcode id=39 lang=javascript
 *
 * [39] Combination Sum
 */
/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {
    if (!candidates.length) {
        return [];
    }
    candidates = candidates.sort((a, b) =>  a - b);
    const result = [];
    function find(n, arr) {
        if (n < candidates[0]) {
            return false;
        }
        for (let i of candidates) {
            if (n === i) {
                result.push([ ...arr, i, ].sort((a, b) => a - b).join(','));
            }
            if (n > i) {
                find(n - i, [ ...arr, i, ]);
            }
        }
    }
    find(target, []);
    return Array.from(new Set(result)).map(i => i.split(','));
};

