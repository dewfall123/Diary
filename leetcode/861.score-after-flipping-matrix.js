/*
 * @lc app=leetcode id=861 lang=javascript
 *
 * [861] Score After Flipping Matrix
 */

// @lc code=start
/**
 * @param {number[][]} A
 * @return {number}
 */
var matrixScore = function(A) {
    const moveRow = y => {
        for(let i = 0; i < A[y].length; i++) {
            A[y][i] = +!A[y][i];
        }
    }
    const moveColumn = x => {
        for (let y = 0; y < A.length; y++) {
            A[y][x] = +!A[y][x];
        }
    }
    for (let y = 0; y < A.length; y++) {
        if (!A[y][0]) {
            moveRow(y);
        }
    }

    const countColumn = x => {
        return A.reduce((count, i) => {
            return count + i[x];
        }, 0);
    }
    for (let x = 1; x < A[0].length; x++) {
        if (countColumn(x) * 2 < A.length) {
            moveColumn(x);
        }
    }
    return A.reduce((count, i) => {
        const n = +`0b${i.join('')}`;
        return count + n;
    }, 0);
};

matrixScore([[0,0,1,1],[1,0,1,0],[1,1,0,0]]);
// @lc code=end

