/*
 * @lc app=leetcode id=1027 lang=javascript
 *
 * [1027] Longest Arithmetic Sequence
 */

// @lc code=start
/**
 * @param {number[]} A
 * @return {number}
 */
var longestArithSeqLength = function(A) {
    // const diffMap = [];
    // const diffSet = new Set();
    // for (let i = 0; i < A.length; i++) {
    //     for (let j = i + 1; j < A.length; j++) {
    //         const diff = A[i] - A[j];
    //         diffMap[i] = diffMap[i] || [];
    //         diffMap[i][j] = diff;
    //         diffSet.add(diff);
    //     }
    // }
    // let max = 0;
    // for (let diff of diffSet) {
    //     for (let start = 0; start < A.length; start++) {
    //         let count = 1;
    //         let i = start;
    //         let j = i + 1;
    //         while (j < A.length) {
    //             while (diffMap[i][j] !== diff && j < A.length) {
    //                 j++;
    //             }
    //             if (j >= A.length) {
    //                 break;
    //             }
    //             count++;
    //             (count > max) && (max = count);
    //             i = j;
    //             j = i + 1;
    //         }
    //     }
    // }
    // return max;
    let max = 0;
    const dp = [];
    for (let end = 0; end < A.length; end++) {
        dp[end] = {};
        for (let i = 0; i < end; i++) {
            const diff = A[end] - A[i];
            const count = (dp[i][diff] || 1) + 1;
            max < count && ( max = count );
            dp[end][diff] = count;
        }
    }
    return max;
};
// @lc code=end

longestArithSeqLength([9,4,7,2,10]);