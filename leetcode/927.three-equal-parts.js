/*
 * @lc app=leetcode id=927 lang=javascript
 *
 * [927] Three Equal Parts
 */

// @lc code=start
/**
 * @param {number[]} A
 * @return {number[]}
 */
var threeEqualParts = function(A) {
    let i = -1;
    let j = -1;
    let count1 = 0;
    for (let i of A) {
        i === 1 && count1++;
    }
    if (count1 === 0) {
        return [0, A.length - 1];
    }
    if (count1 % 3 !== 0) {
        return [ i, j ];
    }
    let endZeroCount = 0;
    let index = A.length - 1;
    while(index >= 0 && A[index--] === 0) {
        endZeroCount++;
    }
    let curCount1 = 0;
    // 找到1/3 的1
    while (curCount1 < count1 / 3) {
        i++;
        if (A[i]) {
            curCount1++;
        }
    }
    // 找到合理的0
    let curCountEndZero = 0;
    while (curCountEndZero < endZeroCount) {
        i++;
        if (A[i]) {
            return [-1, -1];
        }
        curCountEndZero++;
    }
    
    j = i;
    curCount1 = 0;
    // 找到1/3 的1
    while (curCount1 < count1 / 3) {
        j++;
        if (A[j]) {
            curCount1++;
        }
    }
    // 找到合理的0
    curCountEndZero = 0;
    while (curCountEndZero < endZeroCount) {
        j++;
        if (A[j]) {
            return [-1, -1];
        }
        curCountEndZero++;
    }
    j++;
    let a = +`0b${A.slice(0, i + 1).join('')}`;
    let b = +`0b${A.slice(i + 1, j).join('')}`;
    let c = +`0b${A.slice(j).join('')}`;
    if (a === b && b === c) {
        return [i, j];
    }
    return [-1, -1];
};
// @lc code=end

threeEqualParts([]);
