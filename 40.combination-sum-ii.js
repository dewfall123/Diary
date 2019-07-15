/*
 * @lc app=leetcode id=40 lang=javascript
 *
 * [40] Combination Sum II
 */
/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function(candidates, target) {
    if (!candidates.length) {
        return [];
    }
    candidates.sort((a, b) => a - b);
    const result = [];
    let cur = [];
    function find(n, index) {
        if (index > candidates.length || n < 0) {
            return;
        }
        if (n === 0) {
            result.push(cur.join(','));
            return;
        }
        let i = index;
        while(i < candidates.length) {
            cur.push(candidates[i]);
            find(n - candidates[i], i + 1, );
            cur.pop();
            i++;
        }
    }
    find(target, 0);
    return Array.from(new Set(result)).map(i => i.split(','));
};

combinationSum2([10,1,2,7,6,1,5], 8);

