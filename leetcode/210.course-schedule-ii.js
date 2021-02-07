/*
 * @lc app=leetcode id=210 lang=javascript
 *
 * [210] Course Schedule II
 */

// @lc code=start
/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {number[]}
 */
var findOrder = function (numCourses, prerequisites) {
  const map = {};

  function ensure(i) {
    if (!map[i]) {
      map[i] = {
        inCount: 0,
        outCount: 0,
        ins: [],
      };
    }
  }

  for (const [a, b] of prerequisites) {
    ensure(a);
    ensure(b);

    map[b].ins.push(a);
    map[a].outCount++;
    map[b].inCount++;
  }

  const result = [];

  function findNoOut() {
    for (const i in map) {
      if (map[i].outCount === 0) {
        return i;
      }
    }
    return null;
  }

  let i = findNoOut();
  while (i) {
    for (const inI of map[i].ins) {
      map[inI].outCount--;
    }
    result.push(+i);
    delete map[i];
    i = findNoOut();
  }

  if (Object.keys(map).length) {
    return [];
  }

  for (let i = 0; i < numCourses; i++) {
    if (!result.includes(i)) {
      result.push(i);
    }
  }
  return result;
};
// @lc code=end
findOrder(2, [[0, 1]]);
