// https://www.geeksforgeeks.org/problems/maximum-occuring-character-1587115620/1?page=1&difficulty%5B%5D=-1&category%5B%5D=Strings&sortBy=submissions

class Solution 
{
    //Function to find the maximum occurring character in a string.
    getMaxOccuringChar(str)
    {
        // // code here
        // let freq = Array(27).fill(0);
        // for(let i = 0; i < str.length; i++) {
        //     freq[str.charCodeAt(i) - 97]++;
        // }
        // let max = Math.max(...freq);
        // for(let i = 0; i < 27; i++) {
        //     if(freq[i] == max)
        //         return String.fromCharCode(i + 97);
        // }
        //  // code here
        //  let m=new Map();
        //  for(let i=0;i<str.length;i++)
        //  {
        //      m.set(str[i],(m.get(str[i]) || 0) +1)
        //  }
        //  let max=-Infinity;
        //  let res=null
        //  for(let [key,val] of m)
        //  {
        //      if(max<val || (max===val && res>key))
        //      {
        //          max=val;
        //          res=key;
        //      }
        //  }
        //  return res
        // code here
        let res = '';
        let map1 = new Map();
        let max = 0;
        for(let i = 0; i<str.length; i++) {
            let count = 1;
            if(map1.has(str[i])){
                count = map1.get(str[i]) + 1;
                map1.set(str[i], count);
            } else {
                map1.set(str[i], count);
            }
            if(count >= max ) {
                max = count;
            }
        }
        for(let x of map1.entries()){
            if(x[1] === max){
                if(res == ''){
                    res = x[0];
                } 
                if(x[0].charCodeAt(0) < res.charCodeAt(0) )
                    res = x[0];
            }
        }
        return res;
    }
}