/*
 * @lc app=leetcode id=228 lang=javascript
 *
 * [228] Summary Ranges
 */
/**
 * @param {number[]} nums
 * @return {string[]}
 */
var summaryRanges = function(nums) {
    let result = [];
    let cur = [];
    let i = 0;
    while (i < nums.length) {
        if (!cur.length) {
            cur.push(nums[i]);
        } else if (cur[cur.length - 1] + 1 !== nums[i]) {
            result.push([ ...cur, ]);
            cur = [ nums[i], ];
        } else {
            cur = [ cur[0], nums[i], ];
        }
        i++;
    }
    cur.length && ( result.push(cur) );
    result = result.map(i => i.join('->'));
    return result;
};

