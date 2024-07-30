// https://leetcode.com/problems/delete-node-in-a-linked-list/description/

// EASY

var deleteNode = function(node) {
    node.val=node.next.val;
    node.next=node.next.next;
};