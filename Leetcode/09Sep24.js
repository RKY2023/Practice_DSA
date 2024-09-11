// let a = Array.from({ length: 5 }, (v, i) => i);
// [0, 1, 2, 3, 4]
let a = Array.from({ length : 5}, () => {
  return Array(3).fill(-1)
});

console.log(a);

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {number} m
 * @param {number} n
 * @param {ListNode} head
 * @return {number[][]}
 */
var spiralMatrix = function(m, n, head) {
  let mat = Array.from({ length : m}, () => {
      return Array(n).fill(-1)
  });
  let temp = head;
  let directions = [[0, 1], [1, 0], [0, -1], [-1, 0]];
  let direction = 0;
  let x = 0, y=0;
  let dimension = m*n;
  while(dimension) {
      if(!temp) {
          break;
      }        
          mat[x][y] = temp.val;
          temp = temp.next;
          let n_x = x + directions[direction][0];
          let n_y = y + directions[direction][1];

          if(n_x < 0 || n_x >= m || n_y < 0 || n_y >= n || mat[n_x][n_y] !== -1){
              direction = (direction + 1) % 4;
              n_x = x + directions[direction][0];
              n_y = y + directions[direction][1];
          }
          x = n_x;
          y = n_y;     
      dimension--;
  }
  return mat;
};

