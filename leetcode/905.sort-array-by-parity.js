/*
 * @lc app=leetcode id=905 lang=javascript
 *
 * [905] Sort Array By Parity
 */

// @lc code=start
/**
 * @param {number[]} A
 * @return {number[]}
 */
var sortArrayByParity = function(A) {
    let i = 0; let j = A.length - 1;
    while(i < j) {
        while(A[i] % 2 === 0 && i < A.length - 1) {
            i++;
        }
        while(A[j] % 2 !== 0 && j > 0) {
            j--;
        }
        if (i >= j) {
            break;
        }
        [ A[i], A[j] ] = [ A[j], A[i] ];
        i++;
        j--;
    }
    return A;
};

sortArrayByParity([1,3]);
// @lc code=end

