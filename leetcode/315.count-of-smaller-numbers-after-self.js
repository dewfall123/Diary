/*
 * @lc app=leetcode id=315 lang=javascript
 *
 * [315] Count of Smaller Numbers After Self
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var countSmaller = function (nums) {
  // function Node(i) {
  //   this.val = i;
  //   this.dup = 1;
  //   this.leftCount = 0;
  //   this.left = null;
  //   this.right = null;
  // }

  // const results = [];
  // let root = null;

  // function insertBst(val, node, sCount = 0) {
  //   if (!node) {
  //     node = new Node(val);
  //     results.unshift(sCount);
  //   } else if (val === node.val) {
  //     node.dup++;
  //     results.unshift(sCount + node.leftCount);
  //   } else if (val > node.val) {
  //     node.right = insertBst(val, node.right, sCount + node.dup + node.leftCount);
  //   } else {
  //     node.leftCount++;
  //     node.left = insertBst(val, node.left, sCount);
  //   }
  //   return node;
  // }

  // for (let i = nums.length - 1; i >= 0; i--) {
  //   const val = nums[i];
  //   root = insertBst(val, root);
  // }

  // return results;

  nums = nums.map((val, index) => ({val, index}));
  const counts = Array(nums.length).fill(0);
  function mergeSort(start, end) {
    if (start >= end) {
      return;
    }
    const mid = Math.floor((start + end) / 2);
    mergeSort(start, mid);
    mergeSort(mid + 1, end);

    merge(start, end);
  }

  function merge(start, end) {
    const mid = Math.floor((start + end) / 2);
    let leftIndex = start;
    let rightIndex = mid + 1;
    const temp = [];
    while (leftIndex <= mid && rightIndex <= end) {
      if (nums[leftIndex].val <= nums[rightIndex].val) {
        temp.push(nums[rightIndex++]);
      } else {
        counts[nums[leftIndex].index] += end + 1 - rightIndex;
        temp.push(nums[leftIndex++]);
      }
    }
    while (leftIndex <= mid) {
      temp.push(nums[leftIndex++]);
    }
    while (rightIndex <= end) {
      temp.push(nums[rightIndex++]);
    }
    for (let i = start; i <= end; i++) {
      nums[i] = temp[i - start];
    }
  }

  mergeSort(0, nums.length - 1);

  console.log(nums);
  return counts;
};
// @lc code=end
countSmaller([5,2,6,1]);
