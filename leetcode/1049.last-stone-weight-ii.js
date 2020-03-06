/*
 * @lc app=leetcode id=1049 lang=javascript
 *
 * [1049] Last Stone Weight II
 *
 * https://leetcode.com/problems/last-stone-weight-ii/description/
 *
 * algorithms
 * Medium (42.83%)
 * Likes:    370
 * Dislikes: 18
 * Total Accepted:    10.6K
 * Total Submissions: 24.6K
 * Testcase Example:  '[2,7,4,1,8,1]'
 *
 * We have a collection of rocks, each rock has a positive integer weight.
 * 
 * Each turn, we choose any two rocks and smash them together.  Suppose the
 * stones have weights x and y with x <= y.  The result of this smash is:
 * 
 * 
 * If x == y, both stones are totally destroyed;
 * If x != y, the stone of weight x is totally destroyed, and the stone of
 * weight y has new weight y-x.
 * 
 * 
 * At the end, there is at most 1 stone left.  Return the smallest possible
 * weight of this stone (the weight is 0 if there are no stones left.)
 * 
 * 
 * 
 * Example 1:
 * 
 * 
 * Input: [2,7,4,1,8,1]
 * Output: 1
 * Explanation: 
 * We can combine 2 and 4 to get 2 so the array converts to [2,7,1,8,1] then,
 * we can combine 7 and 8 to get 1 so the array converts to [2,1,1,1] then,
 * we can combine 2 and 1 to get 1 so the array converts to [1,1,1] then,
 * we can combine 1 and 1 to get 0 so the array converts to [1] then that's the
 * optimal value.
 * 
 * 
 * 
 * 
 * Note:
 * 
 * 
 * 1 <= stones.length <= 30
 * 1 <= stones[i] <= 100
 * 
 */

// @lc code=start
/**
 * @param {number[]} stones
 * @return {number}
 */
var lastStoneWeightII = function(stones) {
    // 0 1背包问题无法用贪心解决
    // stones.sort((a, b) => b - a);
    // while (stones.length >= 2) {
    //     const left = stones.shift() - stones.shift();
    //     if (left) {
    //         stones.push(left);
    //         stones.sort((a, b) => b - a);
    //     }
    // }
    // return stones[0] || 0;

    // 转化为不超过sum / 2的最大重量
    const sum = stones.reduce((count, i) => count + i);
    const target = Math.floor(sum / 2);
    const dp = [ ...Array(target + 1).keys() ].map(() => 0);
    for (let stoneItem of stones) {
        for (let targetI = target; targetI >= stoneItem; targetI--) {
            dp[targetI] = Math.max(dp[targetI - stoneItem] + stoneItem, dp[targetI]);
        }
    }
    return sum - 2 * dp[target];
};
// @lc code=end

lastStoneWeightII([1,1,4,2,2]);

