/*
 * @lc app=leetcode id=407 lang=javascript
 *
 * [407] Trapping Rain Water II
 */

// @lc code=start
/**
 * @param {number[][]} heightMap
 * @return {number}
 */
var trapRainWater = function (heightMap) {
  const yMax = heightMap.length;
  if (yMax === 0) {
    return 0;
  }
  const xMax = heightMap[0].length;

  const visited = heightMap.map((i) => new Array(i.length).fill(false));


  const offsets = [
    [1, 0],
    [0, 1],
    [-1, 0],
    [0, -1],
  ]
  function isTrap(y, x) {
    const h = heightMap[y][x];
    let isTrap = true;
    for (const [yOffset, xOffset] of offsets) {
      const yI = y + yOffset;
      const xI = x + xOffset;
      if (!visited[yI][xI] && heightMap[yI[xI]] > h) {

      }
    }
    return isTrap;
  }

  function searchRound(y, x) {
    let minH = heightMap[y][x];
    visited[y][x] = true;

    const traps = [[y, x]];

    let count = 0;
    while (minH) {
      for (const [yi, xi] of traps) {
      }
    }

    return count;
  }

  let result = 0;
  for (let y = 0; y < yMax; y++) {
    for (let x = 0; x < xMax; x++) {
      result += count(y, x);
    }
  }

  return result;
};
// @lc code=end
trapRainWater([
  [1, 4, 3, 1, 3, 2],
  [3, 2, 1, 3, 2, 4],
  [2, 3, 3, 2, 3, 1],
]);
