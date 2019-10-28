var uniquePathsWithObstacles = function(obstacleGrid) {
    const m = obstacleGrid.length;
    if (!m) { return 0; }
    const n = obstacleGrid[0].length;
    function factorial (n) {
        if (n <= 1) {
            return 1;
        }
        return n * factorial(n - 1);
    }
    // C(m + n - 2, m - 1 - s)
    let s = obstacleGrid.map(i => i.join().includes('1') ? 1 : 0).join('').replace(/0/g, '').length;
    let a = m + n - 2;
    let b = m - s - 1;
    return factorial(a) / ( factorial(b) * factorial(a - b) );
};

const a= [
    [0,0,0],
    [0,1,0],
    [0,0,0]
];

const b = [[1,0]];


var uniquePathsWithObstacles = function(obstacleGrid) {
    const m = obstacleGrid.length;
    if (!m) { return 0; }
    const n = obstacleGrid[0].length;
    const step = '0'.repeat(m).split('').map(i => [+i]);
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (obstacleGrid[i][j] === 1) {
                step[i][j] = 0;
            }
            else if (i === 0 || j === 0) {
                (!i && !j) && (step[i][j] = 1);
                (i && !j) && (step[i][j] = step[i - 1][j]);
                (!i && j) && (step[i][j] = step[i][j - 1]);
            } else {
                step[i][j] = step[i - 1][j] + step[i][j - 1];
            }
        }
    }
    return step[m - 1][n -1];
}
console.log(uniquePathsWithObstacles(a));