/*
 * @lc app=leetcode id=798 lang=javascript
 *
 * [798] Smallest Rotation with Highest Score
 */

// @lc code=start
/**
 * @param {number[]} A
 * @return {number}
 */
var bestRotation = function(A) {
    const computeScore = k => {
        let score = 0;
        for (let i = 0; i < A.length; i++) {
            A[(i + k) % A.length] <= i && (score++);
        }
        return score;
    };
    let max = 0;
    let index = 0;
    for (let i = 0; i < A.length; i++) {
        const score = computeScore(i);
        if (max < score) {
            max = score;
            index = i;
        }
    }
    return index;
};
// @lc code=end

