/*
 * @lc app=leetcode id=121 lang=javascript
 *
 * [121] Best Time to Buy and Sell Stock
 */
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    if (!prices.length) {
        return 0;
    }
    let min = prices[0];
    let max = prices[0];
    let result = 0;
    for (let i = 1; i < prices.length; i++) {
        if (prices[i] < min) {
            max = min = prices[i];
        } else if (prices[i] > max) {
            max = prices[i];
            const diff = max - min;
            if (result < diff) {
                result = diff;
            }
        }
    }
    return result;
};

