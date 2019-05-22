/*
 * @lc app=leetcode id=4 lang=javascript
 *
 * [4] Median of Two Sorted Arrays
 */
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    let arr = nums1.concat(nums2).sort((a,b) => a - b);
    let middle = arr.length % 2 !== 0 ? [ Math.floor(arr.length / 2)]  : [ arr.length / 2, arr.length / 2 - 1];
    return middle.reduce((pre, i) => {
        return pre + arr[i];
    }, 0) / middle.length;
};
// console.log(findMedianSortedArrays([3], [-2, -1]));
