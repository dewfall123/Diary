/*
 * @lc app=leetcode id=327 lang=javascript
 *
 * [327] Count of Range Sum
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} lower
 * @param {number} upper
 * @return {number}
 */
var countRangeSum = function(nums, lower, upper) {
    const sums = [];
    let sum = 0;
    for (const i of nums) {
        sum += i;
        sums.push(sum);
    }
    sums.unshift(0);
    
    let temp = [];
    let count = 0;

    function mergeSort(start = 0, end = sums.length - 1) {
        if (start >= end) {
            return;
        }
        const mid = Math.floor((start + end) / 2);
        mergeSort(start, mid);
        mergeSort(mid + 1, end);

        let tempIndex = start;
        let rightIndex = mid + 1;
        let lowerIndex = mid + 1;
        let upperIndex = mid + 1;
        for (let i = start; i <= mid; i++) {
            while (lowerIndex <= end && sums[lowerIndex] - sums[i] < lower) {
                lowerIndex++;
            }
            while (upperIndex <= end && sums[upperIndex] - sums[i] <= upper) {
                upperIndex++;
            }
            while (rightIndex <= end && sums[i] >= sums[rightIndex] ) {
                temp[tempIndex++] = sums[rightIndex++];
            }
            temp[tempIndex++] = sums[i];
            count += upperIndex - lowerIndex;
        }

        for (let i = start; i < temp.length; i++) {
            sums[i] = temp[i];
        }
    }


    mergeSort()
    temp = undefined;

    return count;
};
// @lc code=end
countRangeSum([-2,5,-1], -2, 2);

