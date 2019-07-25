/*
 * @lc app=leetcode id=54 lang=yavascript
 *
 * [54] Spiral Matrix
 */
/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(matrix) {
    if (!(matrix.length && matrix[0].length)) {
        return [];
    }
    const deep = Math.min(Math.ceil(matrix.length / 2), Math.ceil(matrix[0].length / 2));
    const result = [];
    let i = 0;
    for (; i < deep; i++) {
        let y = i;
        let x = i;
        const xStart = i;
        const xEnd = matrix[i].length - i - 1;
        const yStart = i;
        const yEnd = matrix.length - i - 1;
        while (x < xEnd) {
            result.push(matrix[y][x]);
            x++;
        }
        while(y < yEnd) {
            result.push(matrix[y][x]);
            y++;
        }
        while(x > xStart) {
            result.push(matrix[y][x]);
            x--;
        }
        while(y > yStart) {
            result.push(matrix[y][x]);
            y--;
        }
        if (xStart === xEnd && yStart === yEnd) {
            result.push(matrix[yStart][xStart]);
        }
    }
    // if (Math.min(matrix.length / 2, matrix[0].length / 2) % 2 !== 0) {

    // }
    return result;
};

console.log(spiralOrder([
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9,10,11,12]
  ]).join(', '));
