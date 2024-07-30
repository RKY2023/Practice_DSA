// https://leetcode.com/problems/remove-linked-list-elements/

// EASY

var removeElements = function(head, val) {
    let dummy = new ListNode();
    dummy.next = head;
    let curr = head;
    let prev = dummy;

    while (curr !== null) {
        if (curr.val === val) {
            prev.next = curr.next;
            curr = curr.next; // Move curr to the next node
        } else {
            prev = curr; // Move prev to the current node
            curr = curr.next; // Move curr to the next node
        }
    }
    return dummy.next;
};