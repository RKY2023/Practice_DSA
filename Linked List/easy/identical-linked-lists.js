// https://www.geeksforgeeks.org/problems/identical-linked-lists/1?page=1&difficulty%5B%5D=-1&category%5B%5D=Linked%2520List&sortBy=submissions

// User function Template for javascript

/**
 * @param {Node} head1
 * @param {Node} head2
 * @returns {boolean}
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
  // Function to check whether two linked lists are identical or not.
  areIdentical(head1, head2) {
      // your code here
      while(head1 !== null && head2 !== null) {
          if(head1.data !== head2.data) {
              return false;
          }
          head1 = head1.next;
          head2 = head2.next;
          
      }
      return (head1 === null && head2 === null);
  }
}
