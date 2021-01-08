/*
 * @lc app=leetcode id=1023 lang=javascript
 *
 * [1023] Camelcase Matching
 */

// @lc code=start
/**
 * @param {string[]} queries
 * @param {string} pattern
 * @return {boolean[]}
 */
var camelMatch = function (queries, pattern) {
  function isLowercase(s) {
    return s >= "a" && s <= "z";
  }

  function match(target, tIndex = 0, pIndex = 0) {
    if (tIndex === target.length && pIndex === pattern.length) {
      return true;
    }

    if (tIndex === target.length) {
      return false;
    }

    const s = target[tIndex];
    let matched = false;
    if (s === pattern[pIndex]) {
      matched = matched || match(target, tIndex + 1, pIndex + 1);
    } else if (isLowercase(s)) {
      matched = matched || match(target, tIndex + 1, pIndex);
    }
    return matched;
  }

  const result = queries.map((str) => match(str));
  return result;
};
// @lc code=end

camelMatch(
  ["FooBar", "FooBarTest", "FootBall", "FrameBuffer", "ForceFeedBack"],
  "FoBaT"
);
