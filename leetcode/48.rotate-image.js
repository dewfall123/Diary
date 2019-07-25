/*
 * @lc app=leetcode id=48 lang=javascript
 *
 * [48] Rotate Image
 */
/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function(matrix) {
    const n = ~~(matrix.length / 2);
    const a = matrix;
    let temp;
    for (let i = 0; i < n; i++) {
        const l = matrix.length - i - 1;
        for (let j = i; j < matrix.length - i - 1; j++) {
            temp = a[i][j];
            a[i][j] = a[l - j + i][i]; // 上
            a[l - j + i][i] = a[l][l - j + i]; // 左
            a[l][l - j + i] = a[j][l]; // 下
            a[j][l] = temp; // 右
        }
    }
};

rotate([
    [ 5, 1, 9,11],
    [ 2, 4, 8,10],
    [13, 3, 6, 7],
    [15,14,12,16]
  ]);

