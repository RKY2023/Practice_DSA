// https://leetcode.com/problems/parsing-a-boolean-expression/description/?envType=daily-question&envId=2024-10-20

/**
 * @param {string} expression
 * @return {boolean}
 */
// "&(|(f))"
var parseBoolExpr = function(expression) {
    let stack = [];
    for( let char of expression) {
      if(char === ')') {
        console.log(stack);
        let subExp = [];
        while(stack[stack.length-1] !== '(') {
          subExp.push(stack.pop());
        }
        stack.pop(); // rm '('
        let op = stack.pop();
        if(op === '!') {
          stack.push((subExp == 't' ? 'f' : 't'));
        } else if(op === '&') {
          let res = 't';
          let literals = subExp.toString().split(',');
          for(let literal of literals) {
            if(literal === 'f'){
              res = 'f';
            }
          }
          stack.push(res);
        } else if(op === '|') {
          let res = 'f';
          let literals = subExp.toString().split(',');
          for(let literal of literals) {
            if(literal === 't'){
              res = 't';
            }
          }
          stack.push(res);
        }
        console.log(stack);
      } else {
        stack.push(char);
      }
    }
    return stack[stack.length-1]=== 't';
};

console.log(parseBoolExpr("|(&(t,f,t),!(t))"));