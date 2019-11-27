/*
 * @lc app=leetcode id=780 lang=javascript
 *
 * [780] Reaching Points
 */

// @lc code=start
/**
 * @param {number} sx
 * @param {number} sy
 * @param {number} tx
 * @param {number} ty
 * @return {boolean}
 */
var reachingPoints = function(sx, sy, tx, ty) {
    while(tx >= sx && ty >= sy) {
        if (tx === sx && ty === sy) {
            return true;
        }
        if (tx > ty) {
            if (ty > sy) {
                tx %= ty;
            } else {
                return tx % ty === sx % ty;
            }
        } else {
            if (tx > sx) {
                ty %= tx;
            } else {
                return ty % tx === sy % tx;
            }
        }
    }
    return false;
};

reachingPoints(6, 5, 11, 16);
// @lc code=end

