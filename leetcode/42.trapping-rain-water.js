/*
 * @lc app=leetcode id=42 lang=javascript
 *
 * [42] Trapping Rain Water
 */
/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
    if (height.length < 3) {
        return 0;
    }
    const sumOri = height.reduce((count, cur) => count + cur, 0);
    let maxIndex = 0;
    for (let i = 0; i < height.length; i++) {
        height[maxIndex] < height[i] && ( maxIndex = i );
    }
    let sum = 0;
    let i = 0;
    while (i < maxIndex) {
        let j = i + 1;
        while (j < maxIndex && height[j] < height[i]) {
            j++;
        }
        sum += height[i] * (j - i);
        i = j;
    }
    i = height.length - 1;
    while (i > maxIndex) {
        let j = i - 1;
        while (j > maxIndex && height[j] < height[i]) {
            j--;
        }
        sum += height[i] * (i - j);
        i = j;
    }
    sum += height[maxIndex];
    return sum - sumOri;
};

trap([0,1,0,2,1,0,1,3,2,1,2,1]);
