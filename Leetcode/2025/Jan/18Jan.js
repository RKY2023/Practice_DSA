// https://leetcode.com/problems/minimum-cost-to-make-at-least-one-valid-path-in-a-grid/?envType=daily-question&envId=2025-01-18

/**
 * @param {number[][]} grid
 * @return {number}
 */
var minCost = function(grid) {
  let dirs = [[0,1], [0,-1], [1,0], [-1,0]];
  let n = grid.length, m = grid[0].length;
  let cost = new Array(n).fill(null).map(() => new Array(m).fill(1 << 30));
  // for(let i=0; i < n; i++){
  //     for(let j=0; j < m; j++){
  //         cost[i][j] = 1 << 30;
  //     }
  // }
  cost[0][0] = 0;
  let dq = [[0,0]];
  while(dq.length > 0){
      let x = dq[0][0];
      let y = dq[0][1];
      console.log(x,y);
      dq.shift();
      for(let i=0; i < dirs.length; i++){
          let nx = x + dirs[i][0];
          let ny = y + dirs[i][1];
          newCost = cost[x][y];
          if(grid[x][y] != i+1) {
              newCost++;
          }

          if(nx >= 0 && ny >= 0 && nx < n && ny < m && newCost < cost[nx][ny]){
              cost[nx][ny] = newCost;
              if(grid[x][y] == i+1){
                  dq = [[nx,ny]].concat(dq);
                  console.log('aa');
              } else {
                  dq = dq.concat([[nx,ny]])
                  console.log('bb');
              }
          }
      }
      console.log('d',dq);

  }
  return cost[n-1][m-1];
  // let x = 0, y=0;
  // let loop = grid.length * grid[i].length;
  // while(loop--){
  //     if(x )
  //     let newDir = dirs[grid[x][y] - 1];
  //     x += newDir[0];
  //     y += newDir[1];
  // }
};