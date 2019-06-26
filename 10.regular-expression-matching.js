/*
 * @lc app=leetcode id=10 lang=javascript
 *
 * [10] Regular Expression Matching
 */
/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function(s, p) {
    let sIndex = 0;
    let pIndex = 0;
    while (sIndex < s.length && pIndex < p.length) {
        let sI = s[sIndex];
        let pI = p[pIndex];
        if (sI === pI || pI === '.') {
            sI++;
            pI++;
            continue;
        }
        if (pI === '*') {
            
        }
    }
};

