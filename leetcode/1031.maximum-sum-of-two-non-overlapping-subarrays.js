/*
 * @lc app=leetcode id=1031 lang=javascript
 *
 * [1031] Maximum Sum of Two Non-Overlapping Subarrays
 */

// @lc code=start
/**
 * @param {number[]} A
 * @param {number} L
 * @param {number} M
 * @return {number}
 */
var maxSumTwoNoOverlap = function(A, L, M) {
    // Lmax, max sum of contiguous L elements before the last M elements.
    for (let i = 1; i < A.length; i++) {
        A[i] += A[i - 1];
    }
    let value = A[L + M - 1];
    let Lmax = A[L - 1];
    let Mmax = A[M - 1];

    let LFirstValue;
    let MFirstValue;
    for (let i = L + M; i < A.length; i++) {
        // L first
        Lmax = Math.max(Lmax, A[i - M] - A[i - M - L]);
        LFirstValue = Lmax + A[i] - A[i - M];

        // M first
        Mmax = Math.max(Mmax, A[i - L] - A[i - L - M]);
        MFirstValue = Mmax + A[i] - A[i - L];

        value = Math.max(value, Math.max(LFirstValue, MFirstValue));
    }
    return value;
};
// @lc code=end

maxSumTwoNoOverlap([0,6,5,2,2,5,1,9,4], 1, 2);
