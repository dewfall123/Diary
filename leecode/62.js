/**
 * 暴力解法: 回溯 O(2^n)
 * 特征: n[i][j] = n[i - 1][j] + n[i][j - 1]
 * 动态规划: 二维数组避免重复计算 空间O(n^2) 时间O(m * n)
 */

/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function(m, n) {
    let step = [ [0] ];
    let min = Math.min(m, n);
    let max = Math.max(m, n);

    for (let i = 0; i < min; i++) {
        step[i] = step[i] || [];
        for (let j = 0; j < i; j++) {
            step[i - 1] = step[i - 1] || '0'.repeat(min).split('').map(i => {return +i});
            step[i][j] = step[i - 1][j] + (+step[i][j - 1] || 0);
        }
        for (let j = 0; j < i; j++) {
            step[j - 1] = step[j - 1] || '0'.repeat(min).split('').map(i => {return +i});
            step[j][i] = step[j - 1][i] + (step[j][i - 1] || 0);
        }
        step[i][i] = i ? step[i][i - 1] + step[i][i - 1] : 1;
    }
    for (let i = min; i < max; i++) {
        for (let j = 0; j < min; j++) {
            step[i] = step[i] || [];
            step[i][j] = j ? step[i - 1][j] + step[i][j - 1] : step[i - 1][j];
        }
    }
    return step[max -1][min - 1];
};

var uniquePaths = function(m, n) {
    const step = '0'.repeat(m).split('').map(i => [+i]);
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (i === 0 || j === 0) {
                step[i][j] = 1;
            } else {
                step[i][j] = step[i - 1][j] + step[i][j - 1];
            }
        }
    }
    return step[m - 1][n -1];
}

console.log(uniquePaths(7, 3));