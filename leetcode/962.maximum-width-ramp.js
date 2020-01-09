/*
 * @lc app=leetcode id=962 lang=javascript
 *
 * [962] Maximum Width Ramp
 */

// @lc code=start
/**
 * @param {number[]} A
 * @return {number}
 */
var maxWidthRamp = function(A) {
    let steps = [];
    let maxStep = 0;
    for (let i = 0; i < A.length; i++) {
        let j = steps.length - 1;
        let step = 0;
        while (j >= 0) {
            if (A[j] <= A[i]) {
                j -= steps[j];
                step = i - j;
            }
            j--;
        }
        steps.push(step);
        maxStep < step && (maxStep = step);
    }
    return maxStep;
};

maxWidthRamp([6,0,8,2,1,5]);
// @lc code=end

