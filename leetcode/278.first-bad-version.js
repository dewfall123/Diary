/*
 * @lc app=leetcode id=278 lang=javascript
 *
 * [278] First Bad Version
 */

// @lc code=start
/**
 * Definition for isBadVersion()
 * 
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */

/**
 * @param {function} isBadVersion()
 * @return {function}
 */
var solution = function(isBadVersion) {
    /**
     * @param {integer} n Total versions
     * @return {integer} The first bad version
     */
    return function(n) {
        let start = 1;
        let end = n;
        if (isBadVersion(1)) {
            return 1;
        }
        if (!isBadVersion(n)) {
            return n;
        }
        while (start + 1 < end) {
            const mid = Math.floor((start + end) / 2);
            if (isBadVersion(mid)) {
                end = mid;
            } else {
                start = mid;
            }
        }
        return end;
    };
};
// @lc code=end

