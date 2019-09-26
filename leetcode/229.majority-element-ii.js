/*
 * @lc app=leetcode id=229 lang=javascript
 *
 * [229] Majority Element II
 */
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var majorityElement = function(nums) {
    const Stack = [
        [], [], [],
    ];
    for (let i of nums) {
        let used = 0;
        for (let stackI of Stack) {
            if (i === stackI[stackI.length - 1]) {
                stackI.push(i);
                used = 1;
                break;
            }
        }
        if (!used) {
            for (let stackI of Stack) {
                if (!stackI.length) {
                    stackI.push(i);
                    break;
                }
            }
        }
        if (Stack.every(i => i.length)) {
            for (let stackI of Stack) {
                stackI.pop();
            }
        }
    }
    const result = [];
    for (let stackI of Stack) {
        if (stackI[0] || stackI[0] === 0) {
            const c = nums.filter(i => i === stackI[0]).length;
            if (c / nums.length > 1 / 3) {
                result.push(stackI[0]);
            }
        }
    }
    return result;
};

majorityElement([2,2]);

