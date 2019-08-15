/*
 * @lc app=leetcode id=73 lang=javascript
 *
 * [73] Set Matrix Zeroes
 */
/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function(matrix) {
    const replace = 'a';
    for (let y = 0; y < matrix.length; y++) {
        for (let x = 0; x < matrix[y].length; x++) {
            if (matrix[y][x] === 0) {
                let i = 0;
                while (i < matrix[y].length) {
                    matrix[y][i] !== 0 && (matrix[y][i] = replace);
                    i++;
                }
                let j = 0;
                while (j < matrix.length) {
                    matrix[j][x] !== 0 && (matrix[j][x] = replace);
                    j++;
                }
            }
        }
    }
    for (let y = 0; y < matrix.length; y++) {
        for (let x = 0; x < matrix[y].length; x++) {
            matrix[y][x] === replace && ( matrix[y][x] = 0 );
        }
    }
    return matrix;
};

