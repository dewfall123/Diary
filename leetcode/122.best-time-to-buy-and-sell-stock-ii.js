/*
 * @lc app=leetcode id=122 lang=javascript
 *
 * [122] Best Time to Buy and Sell Stock II
 */
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    if (!prices.length) {
        return 0;
    }
    let count = 0;
    let start = prices[0];
    let end = null;
    for (let i of prices) {
        if (end === null) {
            if (i >= start) {
                end = i;
            } else {
                start = i;
            }
        } else {
            if (i >= end) {
                end = i;
            } else {
                count += end - start;
                start = i;
                end = null;
            }
        }
    }
    if (end !== null) {
        count += end - start
    }
    return count;
};

var maxProfit = function(prices) {
    let diff = 0
    if (prices.length > 0) { // []
        prices.reduce((acc, next) => {
            if (next > acc) {
                diff += next - acc
            }
            return next
        })
    }
    return diff
};
maxProfit([1,2,3,4,5]);
