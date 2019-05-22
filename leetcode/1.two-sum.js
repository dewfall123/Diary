/*
 * @lc app=leetcode id=1 lang=javascript
 *
 * [1] Two Sum
 */
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let [a, b] = [0, nums.length - 1];
    let sortNums = nums.map((i, index) => { return {value: i, index}; }).sort((a,b) => a.value - b.value);
    while(b > a) {
        let sum = sortNums[a].value + sortNums[b].value;
        if (target === sum) {
            break;
        }
        (sum > target) ? b-- : a++;
    }
    return [sortNums[a].index, sortNums[b].index].sort((a,b) => a - b);
};


twoSum([2,7,11,15], 6);

