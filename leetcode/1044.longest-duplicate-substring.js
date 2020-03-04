/*
 * @lc app=leetcode id=1044 lang=javascript
 *
 * [1044] Longest Duplicate Substring
 */
/**
 * @param {string} S
 * @return {string}
 */
var longestDupSubstring = function(S) {
    let result = '';
    const map = {};
    for (let i = 0; i < S.length; i++) {
        const s = S[i];
        if (map[s]) {
            for (let preIndex of map[s]) {
                let index = i;
                let str = '';
                while (index < S.length && S[preIndex] === S[index]) {
                    str += S[index];
                    index++;
                    preIndex++;
                }
                if (result.length < str.length) {
                    result = str;
                }
            }
        } else {
            map[s] = [i];
        }
    }
    return result;
};
