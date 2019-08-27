/*
 * @lc app=leetcode id=118 lang=javascript
 *
 * [118] Pascal's Triangle
 */
/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
    const result = [];
    for (let i = 0; i < numRows; i++) {
        let arrayI = [];
        if (i === 0) {
            result.push([1]);
            continue;
        }
        for (let j = 0; j <= i; j++) {
            arrayI[j] = (result[i - 1][j] || 0) + (result[i - 1][j - 1] || 0);
        }
        result.push(arrayI);
    }
    return result;
};

generate(5);
