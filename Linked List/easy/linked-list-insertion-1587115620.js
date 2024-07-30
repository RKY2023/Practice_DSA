// https://www.geeksforgeeks.org/problems/linked-list-insertion-1587115620/1?page=1&difficulty%5B%5D=-1&category%5B%5D=Linked%2520List&sortBy=submissions

// User function Template for javascript

/**
 * @param {Node} head
 * @param {number} newData
 * @returns {Node}

/*
class Node{
    constructor(data){
        this.data = data;
        this.next = null;
    }
}
*/

class Solution {
  insertAtEnd(head, x) {
      // code here
      let temp = head;
      while(temp !== null && temp.next !== null) {
          temp = temp.next;
      }
      let newNode = new Node(x);
      if(temp === null) {
          head = newNode;
      } else {
          temp.next = newNode;    
      }
      return head;
  }
}