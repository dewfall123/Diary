/*
 * @lc app=leetcode id=51 lang=javascript
 *
 * [51] N-Queens
 *
 * https://leetcode.com/problems/n-queens/description/
 *
 * algorithms
 * Hard (43.70%)
 * Likes:    1550
 * Dislikes: 65
 * Total Accepted:    185.6K
 * Total Submissions: 418K
 * Testcase Example:  '4'
 *
 * The n-queens puzzle is the problem of placing n queens on an n×n chessboard
 * such that no two queens attack each other.
 * 
 * 
 * 
 * Given an integer n, return all distinct solutions to the n-queens puzzle.
 * 
 * Each solution contains a distinct board configuration of the n-queens'
 * placement, where 'Q' and '.' both indicate a queen and an empty space
 * respectively.
 * 
 * Example:
 * 
 * 
 * Input: 4
 * Output: [
 * ⁠[".Q..",  // Solution 1
 * ⁠ "...Q",
 * ⁠ "Q...",
 * ⁠ "..Q."],
 * 
 * ⁠["..Q.",  // Solution 2
 * ⁠ "Q...",
 * ⁠ "...Q",
 * ⁠ ".Q.."]
 * ]
 * Explanation: There exist two distinct solutions to the 4-queens puzzle as
 * shown above.
 * 
 * 
 */

// @lc code=start
/**
 * @param {number} n
 * @return {string[][]}
 */
var solveNQueens = function(n) {
    const result = [];
    const nRow = new Array(n).fill('.');
    const puzzle = nRow.map(() => [...nRow]);

    function isSafe(y, x) {
        for (let i = 0; i < n; i++) {
            if (i !== x && puzzle[y][i] === 'Q' || i !== y && puzzle[i][x] === 'Q') {
                return false;
            }
        }
        const step = [[1, 1], [1, -1], [-1, 1], [-1, -1]];
        for (const [yStep, xStep] of step) {
            let j = y + yStep;
            let i = x + xStep;
            while(j >= 0 && j < n && x >= 0 && x < n) {
                if (puzzle[j][i] === 'Q') {
                    return false;
                }
                j += yStep;
                i += xStep;
            }
        }
        return true;
    }

    function backtrack(y = 0) {
        if (y >= n) {
            result.push([...puzzle.map(i => i.join(''))]);
            return;
        }
        for (let x = 0; x < n; x++) {
            if (isSafe(y, x)) {
                puzzle[y][x] = 'Q';
                backtrack(y + 1);
                puzzle[y][x] = '.';
            }
        }
    }
    backtrack();

    return result;
};
// @lc code=end
solveNQueens(4);

