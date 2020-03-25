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
    let matched = false;
    function match(sIndex = 0, pIndex = 0) {
        let sChart = s[sIndex];
        let pChart = p[pIndex];
        let pNextChart = p[pIndex + 1];
        // end
        if (!sChart && !pChart) {
            matched = true;
            return;
        }
        if (pNextChart === '*') {
            match(sIndex, pIndex + 2);
            if (sChart === pChart || pChart === '.' && sChart) {
                match(sIndex + 1, pIndex);
            }
        } else {   
            if (sChart === pChart || pChart === '.' && sChart) {
                match(sIndex + 1, pIndex + 1);
            }
        }
    }
    match();
    return matched;
};

isMatch('aa', '.*');