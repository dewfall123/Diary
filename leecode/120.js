let a = [
    [2],
   [3,4],
  [6,5,7],
 [4,1,8,3]
];

// 暴力解法  遍历所有路径

// f[i][j] = min(f[i-1][j], f[i-1][j-1]) + v[i][j];


/**
 * @param {number[][]} triangle
 * @return {number}
 */
var minimumTotal = function(triangle) {
    const lcount = [];
    for (let i = 0; i < triangle.length; i++) {
        lcount[i] = lcount[i] || [];
        for (let j = 0; j < triangle[i].length; j++) {
            if (!i) {
                lcount[i][j] = triangle[i][j];
                continue;
            }
            if (j === 0) {
                lcount[i][j] = triangle[i][j] + lcount[i - 1][j];
                continue;
            }
            if (j === triangle[i - 1].length) {
                lcount[i][j] = triangle[i][j] + lcount[i - 1][j - 1];
                continue;
            }
            lcount[i][j] = triangle[i][j] + Math.min(lcount[i - 1][j], lcount[i - 1][j - 1]);
        }
    }
    let max = Number.MAX_VALUE;
    for (let v of lcount[triangle.length - 1]) {
        max > v && (max = v);
    }
    return max;
};

let r = minimumTotal(a);
console.log(r);