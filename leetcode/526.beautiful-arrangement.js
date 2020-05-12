/*
 * @lc app=leetcode id=526 lang=javascript
 *
 * [526] Beautiful Arrangement
 */

// @lc code=start
/**
 * @param {number} N
 * @return {number}
 */
var countArrangement = function(N) {

    function isDivisible(a, b) {
        return a % b === 0 || b % a === 0;
    }

    let count = 0;

    let cur = [];
    function backtrack() {
        if (cur.length === N) {
            count++;
            return;
        }
        for (let i = 1; i <= N; i++) {
            if (!cur.includes(i)) {
                if (isDivisible(cur.length + 1, i)) {
                    cur.push(i);
                    backtrack();
                    cur.pop();
                }
            }
        }
    }
    backtrack();

    return count;
};
// @lc code=end
countArrangement(2);

