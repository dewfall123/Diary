/*
 * @lc app=leetcode id=74 lang=javascript
 *
 * [74] Search a 2D Matrix
 */
/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
    if (!(matrix.length && matrix[0].length)) {
        return false;
    }
    let y = matrix.length - 1;
    let x = 0;
    while( y >= 0 && x < matrix[0].length ) {
        const v = matrix[y][x];
        if (target === v) {
            return true;
        }
        if (target < v) {
            y--;
        } else {
            x++;
        }
    }
    return false;
};

