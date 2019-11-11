/*
 * @lc app=leetcode id=670 lang=javascript
 *
 * [670] Maximum Swap
 */

// @lc code=start
/**
 * @param {number} num
 * @return {number}
 */
var maximumSwap = function(num) {
    let numArr = (num + '').split('');
    let numSorted = [ ...numArr ].sort((a, b) => +b - +a);
    let i = 0;
    while (i < numArr.length && numSorted[i] === numArr[i]) {
        i++;
    }
    if (i < numArr.length) {
        const index = numArr.lastIndexOf(numSorted[i]);
        numArr[index] = numArr[i];
        numArr[i] = numSorted[i];
    }
    return numArr.join('');
};

maximumSwap(2736);
// @lc code=end

