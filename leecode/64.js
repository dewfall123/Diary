/**
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function(grid) {
    const m = grid.length;
    if (!m) { return 0; }
    const n = grid[0].length;
    const countArr = '0'.repeat(m).split('').map(i => [+i]);
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            (!i && !j) && (countArr[i][j] = 0);
            (i && !j) && (countArr[i][j] = countArr[i - 1][j]);
            (!i && j) && (countArr[i][j] = countArr[i][j - 1]);
            (i && j) && (countArr[i][j] = Math.min(countArr[i - 1][j], countArr[i][j - 1]));
            countArr[i][j] += grid[i][j];
        }
    }
    return countArr[m - 1][n -1];
};

const a = [
    [1,3,1],
    [1,5,1],
    [4,2,1]
];


console.log(minPathSum(a));