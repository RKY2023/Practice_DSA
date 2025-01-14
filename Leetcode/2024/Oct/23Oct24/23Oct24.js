function dfs(node, depth, parent, nodeInfo) {
    if (!node) return;
    nodeInfo.set(node, { depth: depth, parent: parent });
    dfs(node.left, depth + 1, node, nodeInfo);
    dfs(node.right, depth + 1, node, nodeInfo);
}
function replaceWithCousinSums(root) {
    const nodeInfo = new Map();
    dfs(root, 0, null, nodeInfo);

    const cousinSums = new Map();
    for (const [node, info] of nodeInfo.entries()) {
        const depth = info.depth;
        if (!cousinSums.has(depth)) cousinSums.set(depth, 0);
        cousinSums.set(depth, cousinSums.get(depth) + node.val);
    }

    for (const [node, info] of nodeInfo.entries()) {
        const depth = info.depth;
        const parent = info.parent;
        const cousinSum = cousinSums.get(depth);
        let sum = cousinSum;
        if (parent) {
            if (parent.left) sum -= parent.left.val;
            if (parent.right) sum -= parent.right.val;
        }
        node.val = sum - node.val;
    }
}
