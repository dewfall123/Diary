/*
 * @lc app=leetcode id=59 lang=javascript
 *
 * [59] Spiral Matrix II
 */
/**
 * @param {number} n
 * @return {number[][]}
 */
var generateMatrix = function(n) {
    if (n <= 0) {
        return [];
    }
    const result = [];
    const deep = ~~(n / 2);
    for (let i = 0; i < n; i++) {
        result.push([]);
    }
    let index = 0;
    for (let i = 0; i < deep; i++) {
        let x = i;
        let y = i;
        let start = i;
        let end = n - i - 1;
        while (x < end) {
            index++;
            result[y][x] = index;
            x++;
        }
        while(y < end) {
            index++;
            result[y][x] = index;
            y++;
        }
        while(x > start) {
            index++;
            result[y][x] = index;
            x--;
        }
        while(y > start) {
            index++;
            result[y][x] = index;
            y--;
        }
    }
    if (n % 2 !== 0) {
        result[deep][deep] = n * n;
    }
    return result;
};

generateMatrix(3);

