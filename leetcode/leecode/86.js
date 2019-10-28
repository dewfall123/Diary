/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} x
 * @return {ListNode}
 */
var partition = function(head, x) {
    if (!head) {
        return head;
    }
    let node = head;
    const left = [];
    const right = [];
    while (node) {
        node.val < x ? left.push(node) : right.push(node);
        node = node.next;
    }
    const arr = [...left, ...right];
    const newHead = arr[0];
    for (let i = 0; i < arr.length - 1; i++) {
        arr[i].next = arr[i + 1];
    }
    arr[arr.length - 1].next = null;
    return newHead;
};

const a = [1,4,3,2,5,2]


function arrToList(arr) {
    let head;
    let pre;
    for (let i of arr) {
        let n = { val: i, next: null };
        !head && (head = n);
        if (!pre) {
            pre = n
        } else {
            pre.next = n;
            pre = n;
        }
    }
    return head;
}

console.log(arrToList(a));

partition(arrToList(a), 3);