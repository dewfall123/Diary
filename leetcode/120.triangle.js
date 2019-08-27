/*
 * @lc app=leetcode id=120 lang=javascript
 *
 * [120] Triangle
 */
/**
 * @param {number[][]} triangle
 * @return {number}
 */
var minimumTotal = function(triangle) {
    if (!triangle.length) {
        return 0;
    }
    let count = [triangle[0][0] || 0];
    for (let i = 1; i < triangle.length; i++) {
        for (let j = triangle[i].length - 1; j >= 0; j--) {
            const top1 = count[j] !== undefined ? count[j] : Number.MAX_VALUE;
            const top2 = count[j - 1] !== undefined ? count[j - 1] : Number.MAX_VALUE;
            count[j] = triangle[i][j] + Math.min(top1, top2);
        }
    }
    let min = Number.MAX_VALUE;
    for (let i of count) {
        (min > i) && ( min = i );
    }
    return min;
};

minimumTotal([[1],[-5,-2],[3,6,1],[-1,2,4,-3]]);
