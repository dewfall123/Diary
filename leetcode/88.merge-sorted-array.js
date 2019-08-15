/*
 * @lc app=leetcode id=88 lang=javascript
 *
 * [88] Merge Sorted Array
 */
/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
    let index2 = 0;
    let index1 = 0;
    while (index2 < n) {
        while (index1 - index2 < m && nums2[index2] > nums1[index1]) {
            index1++;
        }
        // nums1.splice(index1, 0, nums2[index2++]);
        let i = nums1.length - 1;
        while (i > index1) {
            nums1[i] = nums1[i - 1];
            i--;
        }
        nums1[index1] = nums2[index2];
        index1++;
        index2++;
    }
    nums1.slice(0, n + m);
};

merge([1,2,3,0,0,0],
    3,
    [2,5,6],
    3);