/*
 * @lc app=leetcode id=126 lang=javascript
 *
 * [126] Word Ladder II
 */

// @lc code=start
/**
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {string[][]}
 */
var findLadders = function (beginWord, endWord, wordList) {
  if (!wordList.includes(endWord)) {
    return 0;
  }
  const isLink = (str1, str2) => {
    let count = 0;
    for (let i = 0; i < str1.length; i++) {
      if (str1[i] !== str2[i]) {
        count++;
        if (count > 1) {
          return false;
        }
      }
    }
    return count === 1;
  };

  wordList.unshift(beginWord);

  const nexts = [];
  for (let i = 0; i < wordList.length; i++) {
    for (let j = i + 1; j < wordList.length; j++) {
      if (!nexts[i]) {
        nexts[i] = { visited: false, links: [] };
      }
      if (!nexts[j]) {
        nexts[j] = { visited: false, links: [] };
      }
      if (isLink(wordList[i], wordList[j])) {
        nexts[i].links.push(j);
        nexts[j].links.push(i);
      }
      nexts[i].links;
    }
  }

  let count = 0;
  let nodes = [0];
  while (nodes.length) {
    const nextNodes = [];
    count++;
    for (const index of nodes) {
      if (nexts[index].visited) {
        continue;
      }
      if (wordList[index] === endWord) {
        return count;
      }
      nexts[index].visited = true;
      for (let i of nexts[index].links) {
        if (!nexts[i].visited) {
          nextNodes.push(...nexts[index].links);
        }
      }
    }
    nodes = nextNodes;
  }

  return 0;
};
// @lc code=end

findLadders("hit", "cog", ["hot", "dot", "dog", "lot", "log", "cog"]);
