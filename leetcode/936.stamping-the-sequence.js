/*
 * @lc app=leetcode id=936 lang=javascript
 *
 * [936] Stamping The Sequence
 */

// @lc code=start
/**
 * @param {string} stamp
 * @param {string} target
 * @return {number[]}
 */
var movesToStamp = function(stamp, target) {
    let result = [];
    function isMatch(index) {
        let i = 0;
        let count = 0;
        while (i < stamp.length) {
            count += target[i + index] === '?' ? 1 : 0;
            if (!(target[i + index] === '?' || target[i + index] === stamp[i])) {
                return false;
            }
            i++;
        }
        return count !== stamp.length;
    }
    function replace(index) {
        return target.substring(0, index) + '?'.repeat(stamp.length)
            + target.substring(index + stamp.length, target.length);
    }
    for (let i = 0; i < target.length - stamp.length + 1; i++) {
        if (isMatch(i)) {
            target = replace(i);
            result.push(i);
            i = -1;
        }
    }
    return target.match(/^\?+$/g) ? result.reverse() : [];
};

movesToStamp('abc', 'ababc')
// @lc code=end

