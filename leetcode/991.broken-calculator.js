/*
 * @lc app=leetcode id=991 lang=javascript
 *
 * [991] Broken Calculator
 */

// @lc code=start
/**
 * @param {number} X
 * @param {number} Y
 * @return {number}
 */
var brokenCalc = function(X, Y) {
    let count = 0;
    if (X > Y) {
        return X - Y;
    }
    while (Y > X) {
        if (Y % 2 !== 0) {
            Y++;
            count++;
        }
        Y /= 2;
        count++;
    }
    count += X - Y;
    return count;
};
brokenCalc(
1,
1000000000
);
// @lc code=end

