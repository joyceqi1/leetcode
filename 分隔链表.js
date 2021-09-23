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
    let arr = [],
        node = head;
    while (node !== null) {
        count += 1;
        node = node.next;
    }
    let base = parseInt(count / k);
    let add = count % k;
    node = head;
    arr = new Array(k).fill(null);
    for (let i = 0; i < k && node !== null; i++) {
        arr[i] = node;
        for (let j = 1; j < base + (add > 0 || 0); j++) {
            node = node.next;
        }
        const next = node.next || null;
        node.next = null;
        node = next;
        add -= (add > 0 || 0);
    }
    return arr
};
node1 = new ListNode(1);
node2 = new ListNode(2);
node1.next = node2;
node3 = new ListNode(3);
node2.next = node3;
node4 = new ListNode(4);
node3.next = node4;
console.log(splitListToParts(node1, 3))