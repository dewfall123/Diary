/*
 * @lc app=leetcode id=90 lang=javascript
 *
 * [90] Subsets II
 */
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsetsWithDup = function(nums) {
    nums.sort((a, b) => a -  b);

    let result = [];
    function dp(l, start, cur = []) {
        if (cur.length === l) {
            result.push([...cur]);
            return;
        }
        for (let i = start; i < nums.length; i++) {
            cur.push(nums[i]);
            dp(l, i + 1, cur);
            cur.pop();
            while (i + 1 < nums.length && nums[i + 1] === nums[i]) {
                i++;
            }
        }
    }
    for (let i = 0; i <= nums.length; i++) {
        dp(i, 0, []);
    }
    return result;
};

console.log(JSON.stringify(subsetsWithDup([1,2,2])));
