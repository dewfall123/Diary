/*
 * @lc app=leetcode id=941 lang=javascript
 *
 * [941] Valid Mountain Array
 */

// @lc code=start
/**
 * @param {number[]} A
 * @return {boolean}
 */
var validMountainArray = function(A) {
    let count = 0;
    if (A.length < 3) {
        return false;
    }
    let curR = A[1] - A[0] > 0 ? 1 : -1;
    if (curR <= 0) {
        return false;
    }
    for (let i = 2; i < A.length; i++) {
        let nextR = A[i] - A[i - 1];
        if (nextR === 0) {  
            return false;
        }
        if (nextR * curR < 0) {
            count++;
            if (count > 1) {
                return false;
            }
        }
        curR = nextR;
    }
    return count === 1;
};
// @lc code=end

