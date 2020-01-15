/*
 * @lc app=leetcode id=1019 lang=javascript
 *
 * [1019] Next Greater Node In Linked List
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

// function ListNode(val) {
//     this.val = val;
//     this.next = null;
// }

// const node1 = new ListNode(2);
// const node2 = new ListNode(1);
// const node3 = new ListNode(5);

// node1.next = node2;
// node2.next = node3;
/**
 * @param {ListNode} head
 * @return {number[]}
 */
var nextLargerNodes = function(head) {
    const result = [];
    let cur = head;
    let last = null;
    while (cur) {
        cur.pre = last;
        last = cur;
        cur = cur.next;
    }
    //
    cur = last;
    while (cur) {
        cur.next_larger = null;
        let node = cur.next;
        while (node) {
            if (node.val > cur.val) {
                cur.next_larger = node;
                break;
            } else {
                node = node.next_larger;
            }
        }
        result.unshift(cur.next_larger ? cur.next_larger.val : 0);
        cur = cur.pre;
    }
    return result;
};
// @lc code=end
nextLargerNodes(node1);