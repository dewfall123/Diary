/*
 * @lc app=leetcode id=954 lang=javascript
 *
 * [954] Array of Doubled Pairs
 */

// @lc code=start
/**
 * @param {number[]} A
 * @return {boolean}
 */
var canReorderDoubled = function(A) {

    A.sort((a, b) => {
        let diff = Math.abs(a) - Math.abs(b);
        if (diff === 0) {
            return a < 0 ? -1 : 1;
        }
        return diff;
    });
    const mapA = new Map();
    for (let i of A) {
        if (mapA.has(i)) {
            let count = mapA.get(i);
            mapA.set(i, ++count);
        } else {
            mapA.set(i, 1);
        }
    }
    for (let i of A) {
        if (!mapA.has(i)) {
            continue;
        }
        if (mapA.has(i * 2)) {
            if (mapA.get(i * 2) === 1) {
                mapA.delete(i * 2);
            } else {
                let count = mapA.get(i * 2);
                mapA.set(i * 2, --count);
            }
            let count = mapA.get(i);
            if (count === 1) {
                mapA.delete(i);
            } else {
                mapA.set(i, --count);
            }
        }
    }
    return !mapA.size;
};

canReorderDoubled([0,0,0,0,0,0]);
// @lc code=end

