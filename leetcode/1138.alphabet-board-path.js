/*
 * @lc app=leetcode id=1138 lang=javascript
 *
 * [1138] Alphabet Board Path
 *
 * https://leetcode.com/problems/alphabet-board-path/description/
 *
 * algorithms
 * Medium (46.15%)
 * Likes:    111
 * Dislikes: 60
 * Total Accepted:    10K
 * Total Submissions: 21.5K
 * Testcase Example:  '"leet"'
 *
 * On an alphabet board, we start at position (0, 0), corresponding to
 * character board[0][0].
 * 
 * Here, board = ["abcde", "fghij", "klmno", "pqrst", "uvwxy", "z"], as shown
 * in the diagram below.
 * 
 * 
 * 
 * We may make the following moves:
 * 
 * 
 * 'U' moves our position up one row, if the position exists on the board;
 * 'D' moves our position down one row, if the position exists on the
 * board;
 * 'L' moves our position left one column, if the position exists on the
 * board;
 * 'R' moves our position right one column, if the position exists on the
 * board;
 * '!' adds the character board[r][c] at our current position (r, c) to the
 * answer.
 * 
 * 
 * (Here, the only positions that exist on the board are positions with letters
 * on them.)
 * 
 * Return a sequence of moves that makes our answer equal to target in the
 * minimum number of moves.  You may return any path that does so.
 * 
 * 
 * Example 1:
 * Input: target = "leet"
 * Output: "DDR!UURRR!!DDD!"
 * Example 2:
 * Input: target = "code"
 * Output: "RR!DDRR!UUL!R!"
 * 
 * 
 * Constraints:
 * 
 * 
 * 1 <= target.length <= 100
 * target consists only of English lowercase letters.
 * 
 */

// @lc code=start
/**
 * @param {string} target
 * @return {string}
 */
var alphabetBoardPath = function(target) {
    let steps = '';
    let curChart = {x: 0, y: 0, chart: 'a'};

    function moveY (gap) {
        const yMove = gap > 0 ? 'D' : 'U';
        steps += yMove.repeat(Math.abs(gap));
    }
    function moveX (gap) {
        const xMove = gap > 0 ? 'R' : 'L';
        steps += xMove.repeat(Math.abs(gap));
    }

    function moveTo(c) {
        const d = c.codePointAt() - 'a'.codePointAt();
        const nextChart = {
            x: d % 5,
            y: Math.floor(d / 5),
            chart: c,
        }
        const gapY = nextChart.y - curChart.y;
        const gapX = nextChart.x - curChart.x;

        if (curChart.chart === 'z') {
            moveY(gapY);
            moveX(gapX);
        } else {
            moveX(gapX);
            moveY(gapY);
        }

        steps += '!';
        curChart = nextChart;
    }

    for (let c of target) {
        moveTo(c);
    }

    return steps;
};
// @lc code=end

alphabetBoardPath('zb');
