/**
 * 暴力解法：遍历每一个子串，O(n^2)
 * 特征: 子串逆序相等
 * 求最长公共子串
 * 暴力解法: O(n^2)
 * 特征：
 * 二维结构纪录之前的比较结果 
 */ 

 /**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    const order = s.split('');
    const reOrder = s.split('').reverse();

    const eqArr = order.map(i => {return [];});
    let max = {v: 1, x: 0, y: 0};
    for (let i in order) {
        for (let j in reOrder) {
            eqArr[i][j] = ((order[i] === reOrder[j]) ? ((+i && +j) ? eqArr[i - 1][j - 1] : 0) + 1 : 0);
            if (eqArr[i][j] > max.v && +i === order.length - (j - eqArr[i][j] + 1) - 1) {
                max.v = eqArr[i][j];
                max.x = i;
                max.y = j;
            }
        }
    }
    return s.substring(max.x - max.v + 1, +max.x + 1);
};


console.log(longestPalindrome("babad"));