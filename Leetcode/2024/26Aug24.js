// https://leetcode.com/problems/n-ary-tree-postorder-traversal/description/?envType=daily-question&envId=2024-08-26

/**
 * @param {_Node|null} root
 * @return {number[]}
 */
var postorder = function(root) {
    const result = [];
    const stack = [root];

    while (stack.length > 0) {
        const node = stack.pop();
        result.unshift(node.val); 
        if (node.children) {
            for (let i = 0; i < node.children.length; i++) {
                if (node.children[i]) {
                    stack.push(node.children[i]);
                }
            }
        }
    }

    return result;
};