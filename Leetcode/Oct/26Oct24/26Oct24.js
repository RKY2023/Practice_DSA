/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number[]} queries
 * @return {number[]}
 */
var treeQueries = function(root, queries) {
  let res = [];
  // for(let q of queries) {
  //     res.push(trans(root, 0, q)-1);
  // }
  let hm = new Map();
  for(let q of queries) {
      hm.set(q, {curr: 0, max: 0});
  }
  trans(root, 0, q)
  return res;
};
var trans = function (root, height, val) {
  if(root === null) {
      return height;
  }
  if(hm.has(root.val)) {
      let hmVal = hm.get(q);
      hm.set(q,  {curr: height, max: hmVal.max});
  }

  let lh = trans(root.left, height + 1, val);
  let rh = trans(root.right, height + 1, val);
  if(lh > rh){
      return lh;
  } 
  if(rh >= lh) {
      return rh;
  }
}



var treeQueries = function(root, queries) {
  let res = [];
  for(let q of queries) {
      res.push(trans(root, 0, q)-1);
  }
  return res;
};
var trans = function (root, height, val) {
  if(root === null) {
      return height;
  }
  if(root.val == val) {
      return height-1;
  }
  let lh = trans(root.left, height + 1, val);
  let rh = trans(root.right, height + 1, val);
  if(lh > rh){
      return lh;
  } 
  if(rh >= lh) {
      return rh;
  }
}













/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number[]} queries
 * @return {number[]}
 */
var treeQueries = function(root, queries) {
  let res = [];
  // for(let q of queries) {
  //     res.push(trans(root, 0, q)-1);
  // }
  let hm = new Map();
  for(let q of queries) {
      hm.set(q, {curr: 0, max: 0});
  }
  trans(root, 0, hm);
  for(let [k,v] of hm) {
      res.push(v.curr);
      res.push(v.max);
  }
  return res;
};
var trans = function (root, height, hm) {
  if(root === null) {
      // let hmVal = hm.get(root.val);
      // hm.set(root.val,  {curr: height, max: hmVal.max});
      return height;
  }

  let lh = trans(root.left, height + 1, hm);
  let rh = trans(root.right, height + 1, hm);
  let max = 0;
  if(lh > rh){
      max = lh;
  } 
  if(rh >= lh) {
      max = rh;
  }
  if(hm.has(root.val) && root.val !== null) {
      let hmVal = hm.get(root.val);
      hm.set(root.val,  {curr: height, max: max});
  }
  return max;
}

