/*
 * @lc app=leetcode id=901 lang=javascript
 *
 * [901] Online Stock Span
 */

// @lc code=start

var StockSpanner = function() {
    this.stack = [];
};

/** 
 * @param {number} price
 * @return {number}
 */
StockSpanner.prototype.next = function(price) {
    let span = 1;
    let index = this.stack.length - 1;
    while (index >= 0 && this.stack[index].price <= price) {
        let skip = this.stack[index].span;
        index -= skip;
        span += skip;
    }
    this.stack.push({
        price,
        span,
    });
    return this.stack[this.stack.length - 1].span;
};

/** 
 * Your StockSpanner object will be instantiated and called as such:
 * var obj = new StockSpanner()
 * var param_1 = obj.next(price)
 */
// @lc code=end

