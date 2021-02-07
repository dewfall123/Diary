/*
 * @lc app=leetcode id=301 lang=javascript
 *
 * [301] Remove Invalid Parentheses
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string[]}
 */
var removeInvalidParentheses = function (s) {
  function isValid(str) {
    const stack = [];
    for (const c of str) {
      if (c === ")") {
        if (stack[stack.length - 1] !== "(") {
          return false;
        }
        stack.pop();
      } else if (c === "(") {
        stack.push(c);
      }
    }
    return !stack.length;
  }

  const results = [];
  let curStrings = [s];

  while (!results.length && curStrings.length) {
    const nextString = new Set();
    for (const str of curStrings) {
      if (isValid(str)) {
        results.push(str);
      }
      for (let i = 0; i < str.length; i++) {
        const c = str[i];
        if (c === "(" || c === ")") {
          const strArray = str.split("");
          strArray.splice(i, 1);
          const removeStr = strArray.join("");
          nextString.add(removeStr);
        }
      }
    }
    curStrings = Array.from(nextString);
  }

  return results;
};
// @lc code=end
removeInvalidParentheses("(a)())()");
