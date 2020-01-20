/*
 * @lc app=leetcode id=1020 lang=javascript
 *
 * [1020] Number of Enclaves
 */

// @lc code=start
/**
 * @param {number[][]} A
 * @return {number}
 */
var numEnclaves = function(A) {
    if (!A.length) {
        return 0;
    }
    function check(y, x) {
        if (!(y >= 0 && y < A.length && x >= 0 && x < A[0].length)) {
            return;
        }
        if (A[y][x]) {
            A[y][x] = 0;
            check(y + 1, x);
            check(y - 1, x);
            check(y, x + 1);
            check(y, x - 1);
        }
    }
    let y = 0;
    let x = 0;
    while (x < A[0].length) {
        check(y, x);
        x++;
    }
    x--;
    while (y < A.length) {
        check(y, x);
        y++;
    }
    y--;
    while (x >= 0) {
        check(y, x);
        x--;
    }
    x++;
    while (y >= 0) {
        check(y, x);
        y--;
    }
    let count = 0;
    for (let xArr of A) {
        for (let v of xArr) {
            v && count++;
        }
    }
    return count;
};
// @lc code=end

