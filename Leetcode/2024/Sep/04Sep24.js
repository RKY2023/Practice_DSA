var robotSim = function(commands, obstacles) {
  // doubt 1 :  -1 stands for right or 1 unti also
  // doubt 2 : how to distinct 4 is for x oor y axis
  const directions = [[0,1], [1, 0], [0,-1], [-1,0]];
  let x = y = 0;
  let maxDistance = 0;
  let direction = 0;
  for(let i =0; i<commands.length; i++){
      if (commands[i] === -1){
          direction = (4 + direction + 1) % 4; 
      } else if(commands[i] === -2) {
          direction = (4 + direction - 1) % 4;
      } else {
          for(let j=0; j<commands[i]; j++){
              let next_x = x + directions[direction][0];
              let next_y = y + directions[direction][1];
              let isObstacle = false;
              for(let ob of obstacles){
                  if(ob[0] === next_x && ob[1] === next_y){
                      isObstacle = true;
                  }
              }
              if(!isObstacle){
                  x = next_x;
                  y = next_y;
                  maxDistance = Math.max(maxDistance, (x**2 + y**2));                
              } else {
                  break;
              }
              // console.log('=>',x,y);    
          }
          // console.log(maxDistance);
      }
  }
  return maxDistance;
};

var commands = [4,-1,4,-2,4], obstacles = [[2,4]];
console.log(robotSim(commands, obstacles));