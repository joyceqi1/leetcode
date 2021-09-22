//  Definition for singly-linked list.
function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
}

/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode[]}
 */
var splitListToParts = function(head, k) {
    let count = 0;
    let arr = [];
    while (head !== null) {
        count += 1;
        head = head.next;
    }
    let base = parseInt(count / k);
    let add = count - k * base;
    for (let i = 0; i < k; i++) {
        if (add > 0) {
            arr.push(base + 1);
            add -= 1;
        } else {
            arr.push(base);
        }
    }
    console.log(count, arr)
};
node1 = new ListNode(1);
node2 = new ListNode(2);
node1.next = node2;
node3 = new ListNode(3);
node2.next = node3;
node4 = new ListNode(4);
node3.next = node4;
splitListToParts(node1, 10)