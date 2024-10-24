/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {boolean}
 */
var flipEquiv = function(root1, root2) {
  let res = true;
  res = trans(root1, root2, res);
  return res;
};
var trans = function (r1, r2, status){
  if(r1 === null && r2 === null) {
      return true;
  } else if((r1 === null && r2 !== null) || (r2 === null && r1 !== null)) {
      return false;
  }
  if(r1.val === r2.val) {
      console.log(r1.val, r2.val)
      if(r1.left && r2.left && r1.left.val ===  r2.left.val) {
          console.log('x')
          return trans(r1.left, r2.left, status)
      } else if(r1.left && r2.right && r1.left.val ===  r2.right.val) {
          console.log('y')
          return trans(r1.left, r2.right, status)
      } else {
          console.log('s', (r1.left && r1.left.val !== null) ? r1.left.val : null);
          return status = false;
      }

      if(r1.right && r2.right && r1.right.val ===  r2.right.val) {
          console.log('z')
          return trans(r1.right, r2.right, status)
      } else if(r1.right && r2.left && r1.right.val ===  r2.left.val) {
          console.log('v')
          return trans(r1.right, r2.left, status)
      } else {
          console.log('d', (r1.right && r1.right.val !== null) ? r1.right.val : null);
          return status = false;
      }
  } else {
      console.log('a');
      return false;
  }
}