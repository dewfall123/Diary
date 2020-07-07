/*
 * @lc app=leetcode id=350 lang=javascript
 *
 * [350] Intersection of Two Arrays II
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function(nums1, nums2) {
    const map = {};
    for (let i of nums2) {
        map[i] = (map[i] || 0) + 1;
    }
    const results = [];
    for (let i of nums1) {
        if (map[i]) {
            results.push(i);
            map[i]--;
        }
    }
    return results;
};
// @lc code=end

