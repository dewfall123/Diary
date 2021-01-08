/*
 * @lc app=leetcode id=914 lang=javascript
 *
 * [914] X of a Kind in a Deck of Cards
 */

// @lc code=start
/**
 * @param {number[]} deck
 * @return {boolean}
 */
var hasGroupsSizeX = function (deck) {
  const map = {};
  for (let i of deck) {
    map[i] = (map[i] ?? 0) + 1;
  }


  function gcd(a, b) {
    return b > 0 ? gcd(b, a % b) : a;
  }

  let result = 0;
  for (let n of Object.values(map)) {
    result = gcd(n, result)
  }

  return result > 1;
};
// @lc code=end
