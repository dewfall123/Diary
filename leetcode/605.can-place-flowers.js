/*
 * @lc app=leetcode id=605 lang=javascript
 *
 * [605] Can Place Flowers
 */

// @lc code=start
/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
var canPlaceFlowers = function(flowerbed, n) {
    const isViolate = index => (flowerbed[index - 1] || flowerbed[index + 1]);
    for (let i = 0; i < flowerbed.length; i++) {
        if (!flowerbed[i]) {
            if (!isViolate(i)) {
                n--;
                flowerbed[i] = 1;
            }
        }
    }
    return n <= 0;
};
// @lc code=end

