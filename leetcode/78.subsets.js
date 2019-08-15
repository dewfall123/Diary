/*
 * @lc app=leetcode id=78 lang=javascript
 *
 * [78] Subsets
 */
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
    let result = [];
    for (let i = 0; i < 2 ** nums.length; i++) {
        const item = i.toString(2).padStart(nums.length, '0').split('');
        result.push(item.map((i, index) => {
            return +i ? ('' + nums[index]) : '';
        }).filter(Boolean).map(Number));
    }
    return result;
};

subsets([1,2,3]);
