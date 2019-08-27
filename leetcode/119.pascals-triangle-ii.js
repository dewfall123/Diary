/*
 * @lc app=leetcode id=119 lang=javascript
 *
 * [119] Pascal's Triangle II
 */
/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function(rowIndex) {
    let row = [];
    for (let i = 0; i <= rowIndex; i++) {
        row[i] = 1;
        for (let j = i - 1; j > 0; j--) {
            row[j] += (row[j - 1] || 0);
        }
    }
    return row;
};

getRow(3);

