/*
 * @lc app=leetcode id=417 lang=javascript
 *
 * [417] Pacific Atlantic Water Flow
 */

// @lc code=start
/**
 * @param {number[][]} matrix
 * @return {number[][]}
 */
var pacificAtlantic = function (matrix) {
  const yLength = matrix.length;
  if (yLength <= 0) {
    return [];
  }
  const xLength = matrix[yLength - 1].length;
  // 0 -1 1 -2 2
  const recordMatrix = Array(yLength)
    .fill(0)
    .map(() => Array(xLength).fill(0));

  const offsets = [
    [1, 0],
    [0, 1],
    [-1, 0],
    [0, -1],
  ];

  const isValid = (y, x) => y >= 0 && x >= 0 && y < yLength && x < xLength;

  let bfsArray = [[0, 0]];
  // top left
  for (let i = 0; i < yLength; i++) {
    bfsArray.push([i, 0]);
  }
  for (let i = 0; i < xLength; i++) {
    bfsArray.push([0, i]);
  }

  while (bfsArray.length) {
    for (const [y, x] of bfsArray) {
      recordMatrix[y][x] = 1;
    }

    const nextBfs = {};
    for (const [y, x] of bfsArray) {
      for (const [yOffset, xOffset] of offsets) {
        const [yOffseted, xOffseted] = [y + yOffset, x + xOffset];
        if (!isValid(yOffseted, xOffseted)) {
          continue;
        }
        if (
          matrix[y][x] <= matrix[yOffseted][xOffseted] &&
          recordMatrix[yOffseted][xOffseted] === 0
        ) {
          const key = `${yOffseted}+${xOffseted}`;
          if (!nextBfs[key]) {
            nextBfs[key] = [yOffseted, xOffseted];
          }
        }
      }
    }
    bfsArray = Object.values(nextBfs);
  }

  // right bottom
  bfsArray = [[yLength - 1, xLength - 1]];
  for (let i = 0; i < yLength; i++) {
    bfsArray.push([i, xLength - 1]);
  }
  for (let i = 0; i < xLength; i++) {
    bfsArray.push([yLength - 1, i]);
  }

  const result = [];
  while (bfsArray.length) {
    for (const [y, x] of bfsArray) {
      if (recordMatrix[y][x] === 1) {
        result.push([y, x]);
      }
      recordMatrix[y][x] = 2;
    }

    const nextBfs = {};
    for (const [y, x] of bfsArray) {
      for (const [yOffset, xOffset] of offsets) {
        const [yOffseted, xOffseted] = [y + yOffset, x + xOffset];
        if (!isValid(yOffseted, xOffseted)) {
          continue;
        }
        if (
          matrix[y][x] <= matrix[yOffseted][xOffseted] &&
          recordMatrix[yOffseted][xOffseted] !== 2
        ) {
          const key = `${yOffseted}+${xOffseted}`;
          if (!nextBfs[key]) {
            nextBfs[key] = [yOffseted, xOffseted];
          }
        }
      }
    }
    bfsArray = Object.values(nextBfs);
  }

  return result;
};
// @lc code=end

pacificAtlantic([
  [1, 2, 2, 3, 5],
  [3, 2, 3, 4, 4],
  [2, 4, 5, 3, 1],
  [6, 7, 1, 4, 5],
  [5, 1, 1, 2, 4],
]);
