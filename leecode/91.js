/**
 * 暴力解法:
 * 特征：n 加一个  n | n + 1
 * @param {string} s
 * @return {number}
 */
var numDecodings = function(s) {
    function inAZ(s) {
        return +s[0] !== 0 && +s >= 1 && +s <=26;
    }
    let count = [+inAZ(s[0])];
    if (s.length === 1 || !count[0]) {
        return count[0];
    }
    
    let ab = inAZ(s.substring(0, 2));
    let b = inAZ(s[1]);
    if (!ab && !b) { return 0;};
    (ab && b) && (count[1] = 2);
    (!ab && b) && (count[1] = 1);
    (ab && !b) && (count[1] = 1);
    if (s.length === 2) {
        return count[1];
    }
    for (let i = 2; i < s.length; i++) {
        let ab = inAZ(s.substring(i - 1, i + 1));
        let b = inAZ(s[i]);
        if (!ab && !b) {
            return 0;
        }
        (ab && b) && (count[i] = count[i - 1] + count[i - 2]);
        (ab && !b) && (count[i] = count[i - 2]);
        (!ab && b) && (count[i] = count[i - 1]);
    }
    return count[s.length - 1];
};

const a = '27';
console.log(numDecodings(a));
