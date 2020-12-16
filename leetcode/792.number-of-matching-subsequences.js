/*
 * @lc app=leetcode id=792 lang=javascript
 *
 * [792] Number of Matching Subsequences
 */

// @lc code=start
/**
 * @param {string} S
 * @param {string[]} words
 * @return {number}
 */
var numMatchingSubseq = function (S, words) {
  //   function isSubseq(word) {
  //     let sIndex = 0;
  //     let wIndex = 0;
  //     while (wIndex < word.length) {
  //       while (word[wIndex] !== S[sIndex] && sIndex < S.length) {
  //         sIndex++;
  //       }
  //       if (sIndex >= S.length) {
  //         break;
  //       }
  //       wIndex++;
  //       sIndex++;
  //     }

  //     return wIndex === word.length;
  //   }

  //   let count = 0;
  //   const map = {};
  //   for (let word of words) {
  //     if (map[word] || isSubseq(word)) {
  //       map[word] = true;
  //       count++;
  //     }
  //   }
  //   return count;
  const map = {};
  for (const word of words) {
    map[word[0]] = map[word[0]] ?? [];
    map[word[0]].push(word);
  }

  let count = 0;
  for (let s of S) {
    const moveWords = map[s];
    map[s] = [];
    for (let word of moveWords ?? []) {
      if (word.length === 1) {
        count++;
      } else {
        map[word[1]] = map[word[1]] ?? [];
        map[word[1]].push(word.slice(1));
      }
    }
  }
  return count;
};
// @lc code=end
numMatchingSubseq("dsahjpjauf", ["ahjpjau", "ja", "ahbwzgqnuk", "tnmlanowax"]);
