/*
 * @lc app=leetcode id=718 lang=javascript
 *
 * [718] Maximum Length of Repeated Subarray
 */

// @lc code=start
/**
 * @param {number[]} A
 * @param {number[]} B
 * @return {number}
 */
var findLength = function(A, B) {
    const dp = [];
    let max = 0;
    for (let i = 0; i < A.length; i++) {
        dp[i] = dp[i] || [];
        for (let j = 0; j < B.length; j++) {
            if (A[i] === B[j]) {
                if (i - 1 < 0 || j - 1 < 0) {
                    dp[i][j] = 1;
                } else {
                    dp[i][j] = dp[i - 1][j - 1] + 1;
                }
                max < dp[i][j] && (max = dp[i][j]);
            } else {
                dp[i][j] = 0;
            }
        }
    }
    return max;
};

findLength([1,0,0,0,1],
    [1,0,0,1,1]);
// @lc code=end

