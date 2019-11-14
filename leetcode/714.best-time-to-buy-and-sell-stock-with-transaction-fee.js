/*
 * @lc app=leetcode id=714 lang=javascript
 *
 * [714] Best Time to Buy and Sell Stock with Transaction Fee
 */

// @lc code=start
/**
 * @param {number[]} prices
 * @param {number} fee
 * @return {number}
 */
var maxProfit = function(prices, fee) {
    if (prices.length <= 1) {
        return 0;
    }
    let hold = -prices[0];
    let cash = 0;
    for (let i of prices) {
        cash = Math.max(cash, hold + i - fee);
        hold = Math.max(hold, cash - i);
    }
    return cash;
};
// @lc code=end

