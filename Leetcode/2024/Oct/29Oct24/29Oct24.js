// /**
//  * @param {number[][]} grid
//  * @return {number}
//  */
// var maxMoves = function(grid) {
//   let maxxMoves = 0;
//   let directions = [[-1, 1], [0, 1], [1, 1]];
//   for(let col=0; col < grid.length; col++){
//       let maxMoves = 0
//       let move = function(i,j){
//           let x1 =i, y1=j;
//           let currPos = grid[i][j];
//           for(let dir of directions){
//               let x2 = i + dir[0], y2 = j + dir[1];
//               // console.log(x2, y2)
//               if(x2 >= 0 && y2 >=0 && x2 < grid.length && y2 < grid[i].length && grid[x2][y2] > currPos){
//                   currPos = grid[x2][y2];
//                   console.log(x2, y2)
//                   x1 = x2;
//                   y1 = y2;
//               }
//           }
//           if(currPos > grid[i][j]){
//               maxMoves++;
//               move(x1, y1);
//           } else {
//               return maxMoves;
//           }
//       }
//       // console.log('s', col, 0)
//       move(col, 0);
//       if(maxMoves > maxxMoves){
//           maxxMoves = maxMoves;
//       }
//   }
//   return maxxMoves;
// };


/**
 * @param {number[][]} grid
 * @return {number}
 */

var maxMoves = function(grid) {
  let maxxMoves = 0;
  let directions = [[-1, 1], [0, 1], [1, 1]];
  let move = function(i,j, moves){
      if(moves > maxxMoves){
          maxxMoves = moves;
      }
      let x1 =i, y1=j;
      let currPos = grid[i][j];
      for(let dir of directions){
          let x2 = i + dir[0], y2 = j + dir[1];
          if(x2 >= 0 && y2 >=0 && x2 < grid.length && y2 < grid[i].length && grid[x2][y2] > grid[i][j]){
              currPos = grid[x2][y2];
              console.log(x2,y2)
              return move(x2, y2, moves+1); 
          }
      }
  }
  for(let col=0; col < grid.length; col++){
    move(col, 0, 0);
  }

  return maxxMoves;
};
let grid  = [[2,4,3,5],[5,4,9,3],[3,4,2,11],[10,9,13,15]]
// let grid = [[1000000,92910,1021,1022,1023,1024,1025,1026,1027,1028,1029,1030,1031,1032,1033,1034,1035,1036,1037,1038,1039,1040,1041,1042,1043,1044,1045,1046,1047,1048,1049,1050,1051,1052,1053,1054,1055,1056,1057,1058,1059,1060,1061,1062,1063,1064,1065,1066,1067,1068],[1069,1070,1071,1072,1073,1074,1075,1076,1077,1078,1079,1080,1081,1082,1083,1084,1085,1086,1087,1088,1089,1090,1091,1092,1093,1094,1095,1096,1097,1098,1099,1100,1101,1102,1103,1104,1105,1106,1107,1108,1109,1110,1111,1112,1113,1114,1115,1116,1117,1118]]
// console.log(grid[0].length);
for(let i of grid){
  let str = '';
  for(let j of i){
    str += j+ ' ';
  }
  console.table(str+ '\n');
}
console.log(maxMoves(grid));