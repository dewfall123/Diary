/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    if (!head) {
        return null;
    }
    let first = head;
    let second = head;
    while (n--) {
        first = first.next;
    }
    if (!first) {
        head = head.next;
        return head;
    }
    first = first.next;
    while (first) {
        first = first.next;
        second = second.next;
    }
    second.next = second.next.next;
    return head;
};