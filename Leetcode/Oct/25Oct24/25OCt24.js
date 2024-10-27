// https://leetcode.com/problems/remove-sub-folders-from-the-filesystem/description/?envType=daily-question&envId=2024-10-25

// let a = ["/a/b","/a","/c/f","/c/d","/c/d/e"]
let a = ["/a/b/c","/abc/d"]
let b = a.sort();
let hm = new Set();
let hmIdx = new Set();
for(let i in a) {
  let sl = a[i].split('/');
  let str = '';
  let check = false;
  for(let s of sl){
    if(s === ''){
      continue;
    }
    str += s+'/';
    if(hm.has(str)){
      check = true;
      break;
    }
  }
  if(!check){
    hmIdx.add(i);
    hm.add(str);
  }
}
let res = [];
for(let i of hmIdx){
  res.push(a[i]);
}
console.log(res);