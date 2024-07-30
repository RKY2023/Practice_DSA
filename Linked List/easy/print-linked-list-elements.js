// https://www.geeksforgeeks.org/problems/print-linked-list-elements/1?page=1&difficulty%5B%5D=-1&category%5B%5D=Linked%2520List&sortBy=submissions

// User function Template for javascript

/*LINKED LIST NODE
class Node {
  constructor(x){
    this.data = x;
    this.next = null;
  }
}
*/
/*
    Print elements of a linked list on console
    Head pointer input could be NULL as well for empty list
*/

/**
 * @param {Node} head
 */

class Solution {
  // Function to display the elements of a linked list
  display(head) {
      // code here
      let a = '';
      while(head !== null) {
          a += head.data +' ';
          head = head.next;
      }
      console.log(a);
  }
}