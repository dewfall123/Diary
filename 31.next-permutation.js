/*
 * @lc app=leetcode id=31 lang=javascript
 *
 * [31] Next Permutation
 */
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var nextPermutation = function(nums) {
    let has = false;
    for (let i = nums.length - 1; i >= 0; i--) {
        let j = i - 1;
        while(j >= 0 && nums[i] < nums[j]) {
            j--;
        }
        if (j >= 0) {
            has = true;
            let temp = nums[i];
            nums[i] = nums[j];
            nums[j] = temp;
            // j 之后排序
            nums = nums.slice(0, j + 1).concat(nums.slice(j + 1).sort());
        }
    }
    if (!has) {
        nums = nums.reverse();
    }
    return nums;
};

console.log(nextPermutation([1,3,2]));