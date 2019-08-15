/*
 * @lc app=leetcode id=79 lang=javascript
 *
 * [79] Word Search
 */
/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function(board, word) {
    if (!(board.length && board[0].length)) {
        return false;
    }
    const isIn = (y, x) => y >= 0 && y < board.length && x >= 0 && x < board[0].length;
    let result = false;
    function search(y, x, str) {
        if (board[y][x] === str[0]) {
            let v = board[y][x];
            board[y][x] = '';
            let newStr = str.slice(1);
            if (!newStr.length) {
                result = true;
                return;
            }
            [
                [y, x + 1],
                [y + 1, x],
                [y - 1, x],
                [y, x - 1],
            ].forEach(([yI, xI]) => {
                if (isIn(yI, xI) && !result) {
                    search(yI, xI, newStr);
                }
            });
            board[y][x] = v;
        }
    }

    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board[i].length; j++) {
            search(i, j, word);
        }
    }
    console.log(result);
    return result;
};

exist([["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], "ABCCED");
