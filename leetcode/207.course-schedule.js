/*
 * @lc app=leetcode id=207 lang=javascript
 *
 * [207] Course Schedule
 */

// @lc code=start
/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
var canFinish = function (numCourses, prerequisites) {
  const map = {};
  function ensure(x) {
    if (!map[x]) {
      map[x] = {
        val: x,
        pres: [],
        visited: false,
      };
    }
  }
  for (const [a, b] of prerequisites) {
    ensure(a);
    ensure(b);
    map[a].pres.push(b);
  }

  let hasCircle = false;

  function dfs(val) {
    if (hasCircle) {
      return;
    }
    const node = map[val];
    if (node.visited) {
      hasCircle = true;
      return;
    }
    node.visited = true;
    for (const p of node.pres) {
      dfs(p);
    }
    node.visited = false;
  }

  for (const [a] of prerequisites) {
    if (!hasCircle) {
      dfs(a);
    }
  }

  return !hasCircle;
};
// @lc code=end

canFinish(3, [
  [0, 1],
  [0, 2],
  [1, 2],
]);
