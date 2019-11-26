/*
 * @lc app=leetcode id=779 lang=javascript
 *
 * [779] K-th Symbol in Grammar
 */

// @lc code=start
/**
 * @param {number} N
 * @param {number} K
 * @return {number}
 */
var kthGrammar = function(N, K) {
    let n = N;
    let k = K;
    let count = 0;
    while(k > 1) {
        while(2**(n - 2) >= k) {
            n--;
        }
        k -= 2**(n - 2);
        count++;
    }
    return count % 2 === 0 ? 0 : 1;
};

kthGrammar(4, 4);
// @lc code=end

