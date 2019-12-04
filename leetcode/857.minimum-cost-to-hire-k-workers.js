/*
 * @lc app=leetcode id=857 lang=javascript
 *
 * [857] Minimum Cost to Hire K Workers
 */

// @lc code=start
/**
 * @param {number[]} quality
 * @param {number[]} wage
 * @param {number} K
 * @return {number}
 */
var mincostToHireWorkers = function(quality, wage, K) {
    let minCost = 0;
    const ratios = quality.map((q, index) => {
        return { quality: q, wage: wage[index] };
    }).sort((a, b) => a.wage / a.quality - b.wage / b.quality);

    let countQuality = 0;
    const hiredWorkers = [];
    for (let i = 0; i < K; i++) {
        countQuality += ratios[i].quality;
        hiredWorkers.push(ratios[i]);
    }
    minCost = countQuality * ( hiredWorkers[K - 1].wage / hiredWorkers[K - 1].quality );

    for (let i = K; i < quality.length; i++) {
        hiredWorkers.push(ratios[i]);
        countQuality += ratios[i].quality;

        let maxQualityIndex = 0;
        for (let j = 0; j < hiredWorkers.length; j++) {
            if (hiredWorkers[maxQualityIndex].quality < hiredWorkers[j].quality) {
                maxQualityIndex = j;
            }
        }
        countQuality -= hiredWorkers[maxQualityIndex].quality;
        hiredWorkers.splice(maxQualityIndex, 1);
        let cost = countQuality * ( hiredWorkers[K - 1].wage / hiredWorkers[K - 1].quality );
        cost < minCost && (minCost = cost);
    }
    return minCost.toFixed(5);
};

mincostToHireWorkers([10, 20, 5], [70, 50, 30], 2);
// @lc code=end

