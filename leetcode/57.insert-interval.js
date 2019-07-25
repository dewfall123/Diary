/*
 * @lc app=leetcode id=57 lang=javascript
 *
 * [57] Insert Interval
 */
/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
var insert = function(intervals, newInterval) {
    intervals = intervals.concat([newInterval]);
    if (!intervals.length) {
        return intervals;
    }
    intervals.sort((a, b) => { return a[0] === b[0] ? a[1] - b[1] : a[0] - b[0]});
    const result = [];
    let cur = [];
    for (let i of intervals) {
        if (!cur.length) {
            cur = i;
            continue;
        }
        let curEnd = cur[1];
        if (curEnd < i[0]) {
            result.push([...cur]);
            cur = i;
        } else if (curEnd < i[1]) {
            cur[1] = i[1];
        }
    }
    cur.length && ( result.push(cur) );
    return result;
};

