/*
 * @lc app=leetcode id=898 lang=javascript
 *
 * [898] Bitwise ORs of Subarrays
 */

// @lc code=start
/**
 * @param {number[]} A
 * @return {number}
 */
var subarrayBitwiseORs = function(A) {
    const result = new Set();
    let cur = new Set();
    for (let i = 0; i < A.length; i++) {
        const curNext = new Set();
        curNext.add(A[i]);
        result.add(A[i]);
        for (let item of cur) {
            let v = A[i] | item;
            curNext.add(v);
            result.add(v);
        }
        cur = curNext;
    }
    return result.size;
};

subarrayBitwiseORs([1,1,2]);
// @lc code=end

