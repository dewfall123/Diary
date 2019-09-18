/*
 * @lc app=leetcode id=167 lang=javascript
 *
 * [167] Two Sum II - Input array is sorted
 */
/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(numbers, target) {
    if (numbers.length < 2) {
        return [];
    }
    let a = 0;
    let b = numbers.length - 1;
    while (a < b) {
        if (numbers[a] + numbers[b] === target) {
            return [ a + 1, b + 1, ];
        } else if (numbers[a] + numbers[b] > target) {
            b--;
        } else {
            a++;
        }
    }
};

