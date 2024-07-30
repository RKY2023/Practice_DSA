// https://www.geeksforgeeks.org/problems/count-nodes-of-linked-list/1?page=1&difficulty%5B%5D=-1&category%5B%5D=Linked%2520List&sortBy=submissions


// User function Template for javascript

/**
 * @param {Node} head
 * @returns {number}
 */

/*
class Node{
    constructor(data){
        this.data = data;
        this.next = null;
    }
}
*/

class Solution {
  // Function to count nodes of a linked list.
  getCount(head) {
      // Code here
      let count = 0;
      while(head !== null) {
          count++;
          head = head.next;
      }
      return count;
  }
}


