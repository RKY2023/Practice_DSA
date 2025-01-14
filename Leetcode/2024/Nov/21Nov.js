// https://leetcode.com/problems/count-unguarded-cells-in-the-grid/submissions/1459097028/?envType=daily-question&envId=2024-11-21

/**
 * @param {number} m
 * @param {number} n
 * @param {number[][]} guards
 * @param {number[][]} walls
 * @return {number}
 */
var countUnguarded = function(m, n, guards, walls) {
  let dirs = [[0,1], [-1, 0], [0,-1], [1,0]]
  // create 2d array 
  let cells = Array(m).fill().map(() => Array(n).fill(0));
  // insert wall
  for(let wall of walls){
      cells[wall[0]][wall[1]] = 2; // 2 value for wall
  }
  //loop gaurd 4 dir til wall
  for(let guard of guards) {
      for(let dir of dirs) {
          let x = guard[0];
          let y = guard[1];
          while(x>= 0 && y>=0 && x<m && y<n && cells[x][y] !== 2){
              cells[x][y] = 1; // 1 val for guard
              x += dir[0];
              y += dir[1];
          }
      }
  } 
  // count green
  let count = 0;
  for(let i=0; i<cells.length; i++) {
      for(let j=0; j<cells[i].length; j++) {
          if(!cells[i][j]){
              count++;
          }
      }
  }
  return count;
};


function countUnguardedCells(m, n, guards, walls) {
  const grid = Array.from({ length: m }, () => Array(n).fill(0));
  
  // Mark walls and guards
  for (const [r, c] of walls) {
      grid[r][c] = 1;
  }
  for (const [r, c] of guards) {
      grid[r][c] = 2;
  }
  
  // Directions: right, down, left, up
  const directions = [[0, 1], [1, 0], [0, -1], [-1, 0]];
  
  const markGuardedCells = (r, c, dr, dc) => {
      let nr = r + dr, nc = c + dc;
      while (nr >= 0 && nr < m && nc >= 0 && nc < n && grid[nr][nc] !== 1 && grid[nr][nc] !== 2) {
          grid[nr][nc] = 3;  // Mark as guarded
          nr += dr;
          nc += dc;
      }
  };

  for (const [r, c] of guards) {
      for (const [dr, dc] of directions) {
          markGuardedCells(r, c, dr, dc);
      }
  }
  
  // Count unguarded cells
  let unguardedCount = 0;
  for (const row of grid) {
      for (const cell of row) {
          if (cell === 0) {
              unguardedCount++;
          }
      }
  }
  
  return unguardedCount;
}

// Example usage

