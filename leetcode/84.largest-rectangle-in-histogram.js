/*
 * @lc app=leetcode id=84 lang=javascript
 *
 * [84] Largest Rectangle in Histogram
 */
/**
 * @param {number[]} heights
 * @return {number}
 */
var largestRectangleArea = function(heights) {
    heights.push(-1);
    let maxArea = 0;
    const stack = [];
    for (let i = 0; i < heights.length; i++) {
        let cur = heights[i];
        while (stack.length && cur < heights[stack[stack.length - 1]]) {
            const index = stack.pop();
            const w = !stack.length ? i : i - stack[stack.length - 1] - 1;
            const area = w * heights[index];
            maxArea < area && ( maxArea = area );
        }
        stack.push(i);
    }
    return maxArea;
};

largestRectangleArea([4,2,0,3,2,5]);

