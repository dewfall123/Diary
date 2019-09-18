/*
 * @lc app=leetcode id=123 lang=javascript
 *
 * [123] Best Time to Buy and Sell Stock III
 */
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let profits = [];
    let minmaxArray = [];
    for (let i of prices) {
        if (!minmaxArray.length) {
            minmaxArray.push(i);
            continue;
        } else if (minmaxArray.length === 1) {
            if (i > minmaxArray) {
                minmaxArray.push(i);
            } else {
                minmaxArray[0] = i;
            }
        } else if (minmaxArray.length === 2) {
            if (i >= minmaxArray[1]) {
                minmaxArray[1] = i;
            } else {
                profits.push(minmaxArray[1] - minmaxArray[0]);
                minmaxArray = [ i, ];
            }
        }
    }
    if (minmaxArray.length === 2) {
        profits.push(minmaxArray[1] - minmaxArray[0]);
    }
    profits.sort((a, b) => b - a);
    return (profits[0] || 0) + (profits[1] || 0);
};

maxProfit([1,2,4,2,5,7,2,4,9,0]);
