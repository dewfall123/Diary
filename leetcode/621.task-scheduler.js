/*
 * @lc app=leetcode id=621 lang=javascript
 *
 * [621] Task Scheduler
 */

// @lc code=start
/**
 * @param {character[]} tasks
 * @param {number} n
 * @return {number}
 */
var leastInterval = function(tasks, n) {
    if (n === 0) {
        return tasks.length;
    }
    const map = new Map();
    let max = 0;
    let maxCount = 0;
    for(let i of tasks) {
        map.set(i, (map.get(i) || 0) + 1);
        map.get(i) > max && ( max = map.get(i) );
    }
    for (let [key, value] of map) {
        if (value === max) {
            maxCount++;
        }
    }
    return Math.max((max - 1) * ( n + 1 ) + maxCount, tasks.length);
};

leastInterval(["A","A","A","B","B","B"], 2);
// @lc code=end

