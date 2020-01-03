/*
 * @lc app=leetcode id=950 lang=javascript
 *
 * [950] Reveal Cards In Increasing Order
 */

// @lc code=start
/**
 * @param {number[]} deck
 * @return {number[]}
 */
var deckRevealedIncreasing = function(deck) {
    deck.sort((a, b) => a - b);
    let indexs = [...Array(deck.length).keys()];
    let indexResult = [];
    function doStep() {
        indexResult.push(indexs.shift());
        indexs.length && indexs.push(indexs.shift());
    }
    while (indexs.length) {
        doStep();
    }
    let result = [];
    for (let i = 0; i < indexResult.length; i++) {
        result[indexResult[i]] = deck[i];
    }
    return result;
};

deckRevealedIncreasing([17,13,11,2,3,5,7]);
// @lc code=end

