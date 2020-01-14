/*
 * @lc app=leetcode id=1013 lang=javascript
 *
 * [1013] Partition Array Into Three Parts With Equal Sum
 */

// @lc code=start
/**
 * @param {number[]} A
 * @return {boolean}
 */
var canThreePartsEqualSum = function(A) {
    const count = A.reduce((count, i) => count + i);
    if (count % 3 !== 0) {
        return false;
    }
    const aimValue = count / 3;
    let i = 0;
    let count1 = 0;
    while (i < A.length && count1 !== aimValue) {
        count1 += A[i];
        i++;
    }
    let j = i;
    let count2 = 0;
    while (j < A.length && count2 !== aimValue) {
        count2 += A[j];
        j++;
    }
    let count3 = 0;
    let k = j;
    while (k < A.length) {
        count3 += A[k];
        k++;
    }
    if (count3 === aimValue && i > 0 && j < A.length) {
        return true;
    }
    return false;
};

canThreePartsEqualSum([0,2,1,-6,6,-7,9,1,2,0,1]);
// @lc code=end

