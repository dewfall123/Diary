/*
 * @lc app=leetcode id=93 lang=javascript
 *
 * [93] Restore IP Addresses
 *
 * https://leetcode.com/problems/restore-ip-addresses/description/
 *
 * algorithms
 * Medium (33.69%)
 * Likes:    1065
 * Dislikes: 466
 * Total Accepted:    178.7K
 * Total Submissions: 521.2K
 * Testcase Example:  '"25525511135"'
 *
 * Given a string containing only digits, restore it by returning all possible
 * valid IP address combinations.
 * 
 * A valid IP address consists of exactly four integers (each integer is
 * between 0 and 255) separated by single points.
 * 
 * Example:
 * 
 * 
 * Input: "25525511135"
 * Output: ["255.255.11.135", "255.255.111.35"]
 * 
 * 
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string[]}
 */
var restoreIpAddresses = function(s) {
    function isValid(n) {
        return Number(n) <= 255 && !(n.startsWith('0') && n.length > 1);
    }

    const result = [];
    let cur = [];
    function backtrack(index = 0) {
        if (index >= s.length) {
            if (cur.length === 4) {
                result.push(cur.join('.'));
            }
            return;
        }
        if (cur.length > 4) {
            return;
        }
        let str = '';
        while (index < s.length) {
            str += s[index];
            if(!isValid(str)) {
                break;
            }
            cur.push(str);
            backtrack(index + 1);
            cur.pop();

            index++;
        }
    }

    backtrack();
    return result;
};
// @lc code=end
restoreIpAddresses("010010");
