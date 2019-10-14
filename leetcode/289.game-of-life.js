/*
 * @lc app=leetcode id=289 lang=javascript
 *
 * [289] Game of Life
 */

// @lc code=start
/**
 * @param {number[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var gameOfLife = function(board) {
    const yLen = board.length;
    if (!yLen) {
        return [];
    }
    const xLen = board[0].length;
    function handleNeighbor(y, x) {
        let count = 0;
        const xMin = Math.max(0, x - 1);
        const xMax = Math.min(xLen - 1, x + 1);
        const yMin = Math.max(0, y - 1);
        const yMax = Math.min(yLen - 1, y + 1);
        for (let j = yMin; j <= yMax; j++) {
            for (let i = xMin; i <= xMax; i++) {
                if (!(j === y && x === i)) {
                    count += board[j][i];
                }
            }
        }
        return count;
    }
    let neighbor = Array.from(board, () => []);
    for (let j = 0; j < yLen; j++) {
        for (let i = 0; i < xLen; i++) {
            neighbor[j][i] = handleNeighbor(j, i);
        }
    }
    for (let j = 0; j < yLen; j++) {
        for (let i = 0; i < xLen; i++) {
            if (neighbor[j][i] < 2) {
                board[j][i] = 0;
            } else if (neighbor[j][i] < 4) {
                if (neighbor[j][i] === 3 && !board[j][i]) {
                    board[j][i] = 1;
                }
            } else {
                board[j][i] = 0;
            }
        }
    }
};

gameOfLife([[0,1,0],[0,0,1],[1,1,1],[0,0,0]]);
// @lc code=end

