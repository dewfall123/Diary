/*
 * @lc app=leetcode id=37 lang=javascript
 *
 * [37] Sudoku Solver
 *
 * https://leetcode.com/problems/sudoku-solver/description/
 *
 * algorithms
 * Hard (40.88%)
 * Likes:    1447
 * Dislikes: 83
 * Total Accepted:    168.4K
 * Total Submissions: 407.7K
 * Testcase Example:  '[["5","3",".",".","7",".",".",".","."],["6",".",".","1","9","5",".",".","."],[".","9","8",".",".",".",".","6","."],["8",".",".",".","6",".",".",".","3"],["4",".",".","8",".","3",".",".","1"],["7",".",".",".","2",".",".",".","6"],[".","6",".",".",".",".","2","8","."],[".",".",".","4","1","9",".",".","5"],[".",".",".",".","8",".",".","7","9"]]'
 *
 * Write a program to solve a Sudoku puzzle by filling the empty cells.
 * 
 * A sudoku solution must satisfy all of the following rules:
 * 
 * 
 * Each of the digits 1-9 must occur exactly once in each row.
 * Each of the digits 1-9 must occur exactly once in each column.
 * Each of the the digits 1-9 must occur exactly once in each of the 9 3x3
 * sub-boxes of the grid.
 * 
 * 
 * Empty cells are indicated by the character '.'.
 * 
 * 
 * A sudoku puzzle...
 * 
 * 
 * ...and its solution numbers marked in red.
 * 
 * Note:
 * 
 * 
 * The given board contain only digits 1-9 and the character '.'.
 * You may assume that the given Sudoku puzzle will have a single unique
 * solution.
 * The given board size is always 9x9.
 * 
 * 
 */

// @lc code=start
/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solveSudoku = function (board) {
    function hasDigits(y, x) {
        return board[y][x] !== '.';
    }
    function computeLeftDigits(y, x) {
        const existDigits = new Set();
        for (let i = 0; i < 9; i++) {
            hasDigits(y, i) && existDigits.add(board[y][i]);
        }
        for (let i = 0; i < 9; i++) {
            hasDigits(i, x) && existDigits.add(board[i][x]);
        }
        let xStart = x - x % 3;
        let yStart = y - y % 3;
        for (let j = yStart; j < yStart + 3; j++) {
            for (let i = xStart; i < xStart + 3; i++) {
                hasDigits(j, i) && existDigits.add(board[j][i]);
            }
        }
        let leftDigits = [];
        for (let i = 1; i <= 9; i++) {
            !existDigits.has(i.toString()) && leftDigits.push(i.toString());
        }
        return leftDigits;
    }

    function traverseBoard() {
        for (let y = 0; y < 9; y++) {
            for (let x = 0; x < 9; x++) {
                if (!hasDigits(y, x)) {
                    const leftDigits = computeLeftDigits(y, x);
                    for (let d of leftDigits) {
                        board[y][x] = d;
                        if (traverseBoard()) {
                            return true;
                        }
                        board[y][x] = '.';
                    }
                    return false;
                }
            }
        }
        return true;
    }
    traverseBoard();
};
// @lc code=end
solveSudoku([["5", "3", ".", ".", "7", ".", ".", ".", "."], ["6", ".", ".", "1", "9", "5", ".", ".", "."], [".", "9", "8", ".", ".", ".", ".", "6", "."], ["8", ".", ".", ".", "6", ".", ".", ".", "3"], ["4", ".", ".", "8", ".", "3", ".", ".", "1"], ["7", ".", ".", ".", "2", ".", ".", ".", "6"], [".", "6", ".", ".", ".", ".", "2", "8", "."], [".", ".", ".", "4", "1", "9", ".", ".", "5"], [".", ".", ".", ".", "8", ".", ".", "7", "9"]])
