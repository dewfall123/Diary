/*
 * @lc app=leetcode id=870 lang=javascript
 *
 * [870] Advantage Shuffle
 */

// @lc code=start
/**
 * @param {number[]} A
 * @param {number[]} B
 * @return {number[]}
 */
var advantageCount = function(A, B) {
    const asc = (a, b) => a - b;
    A.sort(asc);
    const sortedB = B.map((i, index) => ({ value: i, index })).sort((a, b) => a.value - b.value);

    const permutation = [];
    for (let item of sortedB) {
        let index = 0;
        while (index < A.length && A[index] <= item.value) {
            index++;
        }
        permutation[item.index] = A[index % A.length];
        A.splice(index % A.length, 1);
    }
    return permutation;
};

advantageCount([718967141,189971378,341560426,23521218,339517772],
    [967482459,978798455,744530040,3454610,940238504]);
// @lc code=end

