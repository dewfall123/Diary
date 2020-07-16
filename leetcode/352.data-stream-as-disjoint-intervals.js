/*
 * @lc app=leetcode id=352 lang=javascript
 *
 * [352] Data Stream as Disjoint Intervals
 */

// @lc code=start
/**
 * Initialize your data structure here.
 */
var SummaryRanges = function() {
    this.nums = [];
};

/** 
 * @param {number} val
 * @return {void}
 */
SummaryRanges.prototype.addNum = function(val) {
    this.nums[val] = true;
};

/**
 * @return {number[][]}
 */
SummaryRanges.prototype.getIntervals = function() {
    const intervals = [];
    let start;
    for (let i = 0; i < this.nums.length; i++) {
        if (this.nums[i]) {
            start = i;
            while (i < this.nums.length && this.nums[i]) {
                i++;
            }
            intervals.push([start, i - 1]);
        }
    }
    return intervals;
};

/** 
 * Your SummaryRanges object will be instantiated and called as such:
 * var obj = new SummaryRanges()
 * obj.addNum(val)
 * var param_2 = obj.getIntervals()
 */
// @lc code=end

