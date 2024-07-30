// https://leetcode.com/problems/intersection-of-two-linked-lists/description/

// EASY

var getIntersectionNode = function(headA, headB) {
  let ptrA = headA;
  let ptrB = headB;
  while(ptrA !== ptrB) {
   ptrA = ptrA ? ptrA.next: headB;
   ptrB = ptrB ? ptrB.next: headA;
  }
  return ptrA;
};
