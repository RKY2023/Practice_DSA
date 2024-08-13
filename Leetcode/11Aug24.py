class Solution:
  def minDays(self, grid: List[List[int]]) -> int:
    def islandCount():
      ans = 0
      visited = set()
      for i in range(m):
        for j in range(n):
          if grid[i][j] == 1 and (i, j) not in visited:
            ans +=1
            
            queue = collections.deque([i][j])
            visited.add((i,j))
            
            while queue:
              cur_i, cur_j = queue.popleft()
              
              for d in direction:
                new_i = cur_i + d[0]
                new_j = cur_j + d[1]
                if 0 <= new_i < m and 0 <= new_j < n and (new_i, new_j) not in visited and grid[new_i][new_j] == 1:
                  queue.append((new_i, new_j))
                  visited.add((new_i, new_j))
      return ans
    direction = [(-1, 0), (1, 0), (0, -1), (0, 1)]
    m = len(grid)
    n = len(grid[0])
    if islandCount() > 1:
      return 0
    for i in range(m):
      for j in range(n):
        if grid[i][j] == 1:
          grid[i][j] = 0
          if islandCount() > 1:
            return 1
          grid[i][j] = 1
    return 2
                