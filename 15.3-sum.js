/*
 * @lc app=leetcode id=15 lang=javascript
 *
 * [15] 3Sum
 */
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    if (nums.length < 3) {
        return [];
    }
    const result = [];
    nums.sort((a, b) => a - b);
    for (let aIndex = 0; aIndex < nums.length - 2; aIndex++) {
        let a = nums[aIndex];
        if (a > 0) {
            return result;
        }
        if (aIndex > 0 && a === nums[aIndex - 1]) {
            continue;
        }
        let bIndex = aIndex + 1;
        let cIndex = nums.length - 1;
        while (bIndex < cIndex) {
            let b = nums[bIndex];
            let c = nums[cIndex];
            if (bIndex > aIndex + 1 && b === nums[bIndex - 1]) {
                bIndex++;
                continue;
            }
            if (cIndex < nums.length - 1 && c === nums[cIndex + 1]) {
                cIndex--;
                continue;
            }
            if (a + b + c === 0) {
                result.push([a,b,c]);
                bIndex++;
                cIndex--;
                continue;
            }
            if (a + b + c < 0) {
                bIndex++;
                continue;
            }
            if (a + b + c > 0) {
                cIndex--;
                continue;
            }
        }
    }
    return result;
};

