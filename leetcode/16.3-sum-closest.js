/*
 * @lc app=leetcode id=16 lang=javascript
 *
 * [16] 3Sum Closest
 */
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function(nums, target) {
    nums.sort((a, b) => a -  b);
    let a,b,c;
    let min = Number.MAX_VALUE;
    let result;
    for (let i = 0; i < nums.length - 1; i++) {
        a = nums[i];
        let bIndex = i + 1;
        let cIndex = nums.length - 1;
        let lastCount;
        while(bIndex < cIndex) {
            b = nums[bIndex];
            c = nums[cIndex];
            let count = a + b + c;
            if (count - target === 0) {
                return count;
            }
            if (count - target> 0) {
                cIndex--;
            } else {
                bIndex++;
            }
            if (Math.abs(count - target) < min) {
                min = Math.abs(count - target);
                result = count;
            }
            // if (lastCount !== undefined && (lastCount - target) * (count - target) < 0) {
            //     break;
            // }
            lastCount = count;
        }
    }
    return result;
};

console.log(threeSumClosest([-55,-24,-18,-11,-7,-3,4,5,6,9,11,23,33], 0));

