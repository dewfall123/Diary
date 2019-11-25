/*
 * @lc app=leetcode id=729 lang=javascript
 *
 * [729] My Calendar I
 */

// @lc code=start

var MyCalendar = function() {
    
};

/** 
 * @param {number} start 
 * @param {number} end
 * @return {boolean}
 */
MyCalendar.prototype.book = function(start, end) {
    if(!this.books) {
        this.books = [[start, end]];
        return true;
    }
    for (let i of this.books) {
        if (!(end - 1 < i[0] || i[1] - 1 < start)) {
            return false;
        }
    }
    this.books.push([start, end]);
    return true;
};

/** 
 * Your MyCalendar object will be instantiated and called as such:
 * var obj = new MyCalendar()
 * var param_1 = obj.book(start,end)
 */
// @lc code=end

