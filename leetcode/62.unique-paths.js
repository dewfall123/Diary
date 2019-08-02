/*
 * @lc app=leetcode id=62 lang=javascript
 *
 * [62] Unique Paths
 */
/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function(m, n) {
    const map = [];
    for (let i = 0; i < n; i++) {
        map[i] = [];
    }
    const min = Math.min(m, n);
    const max = Math.max(m, n);
    map[0][0] = 1;
    for (let i = 0; i < min; i++) {
        let x = 0;
        let y = 0;
        while(x < i) {
            map[i][x] = (i && x) ? map[i][x - 1] + map[i - 1][x] : 1;
            x++;
        }
        while(y < i) {
            map[y][i] = (i && y) ? map[y][i - 1] + map[y - 1][i] : 1;
            y++;
        }
        i && (map[y][x] = (x && y) ? map[y][x - 1] + map[y - 1][x] : 1);
    }
    if (m === max) {
        for (let x = min; x < max; x++) {
            let y = 0;
            while (y < min) {
                map[y][x] = (x && y) ? map[y - 1][x] + map[y][x - 1] : 1;
                y++;
            }
        }
    } else {
        for (let y = min; y < max; y++) {
            let x = 0;
            while (x < min) {
                map[y][x] = (x && y) ? map[y - 1][x] + map[y][x - 1] : 1;
                x++;
            }
        }
    }
    return map[n - 1][m - 1];
};

uniquePaths(3, 2);
