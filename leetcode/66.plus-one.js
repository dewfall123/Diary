/*
 * @lc app=leetcode id=66 lang=javascript
 *
 * [66] Plus One
 */
/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    if (!digits.length) {
        return digits;
    }
    digits[digits.length - 1] += 1;
    for (let i = digits.length - 1; i > 0; i--) {
        if (digits[i] <= 9) {
            break;
        }
        digits[i] = 0;
        digits[i - 1] += 1;
    }
    if (digits[0] > 9) {
        digits[0] = 0;
        digits.unshift(1);
    }
    return digits;
};

