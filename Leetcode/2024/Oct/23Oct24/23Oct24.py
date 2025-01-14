def dfs(node, depth, parent, node_info):
    if not node:
        return
    node_info[node] = (depth, parent)
    dfs(node.left, depth + 1, node)
    dfs(node.right, depth + 1, node)

node_info = {}
dfs(root, 0, None, node_info)
cousin_sums = {}
for node, (depth, parent) in node_info.items():
    if depth not in cousin_sums:
        cousin_sums[depth] = 0
    cousin_sums[depth] += node.val

for node, (depth, parent) in node_info.items():
    node.val = cousin_sums[depth] - node.val
