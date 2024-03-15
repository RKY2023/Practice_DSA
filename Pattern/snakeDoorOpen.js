// https://www.geeksforgeeks.org/problems/print-matrix-in-diagonal-pattern/1
let arr = [];
let n = 4; //size of an array;
let k = 1;
for (let i =0; i < n; i++) {
    let a = [];
    for ( let j = 0; j < n; j++) {
        a.push(k);
        k++;
    }
    arr.push(a);
}
console.log(arr);
	


// const next = (arr,i,j, dir, diagonal, r) => {
//     // 0 down diagonal 1 up diagonal
//     // r = 1 right r = 0 left
//     // let prevDir = 0;
//     while (dir < 4 && k--) {
//         if (i == j == n-1) {
//             break;
//         }
//         else if (arr[i] === undefined || arr[i][j] === undefined ) {
//             dir++;
//         } else {
//             // return arr[i][j];
//             console.log(arr[i][j]);
//         }

//         if(dir === 0 ){
//             // down-left diagonal
//             i += 1;
//             j -=1;
//             // prevDir = dir;
//             console.log('down-left');
//         } else if(dir === 1){
//             // up-right diagonal
//             i -= 1;
//             j +=1;
//             prevDir = dir;
//             console.log('up-right');
//         } else if(dir === 2 && ((i+j)%2 == 0)){
//             // right
//             j +=1;
//             dir = 0;  //dir 0 1
//             console.log('right');
//         } else if(dir === 3 && ((i+j)%2 == 1)){
//             // down 
//             i += 1;
//             dir++;
//             console.log('down');
//         }
//         if(dir > 3) {
//             dir = dir%4;
//         }
//         console.log('dir ', dir, i, j);
        
            
//     }

// }
// console.log(arr[1][3] === undefined);
// while(k--){

// }
// next(arr, 0, 0, 2, 0, 1);
const next = (arr) => {
    // 0 down diagonal 1 up diagonal
    // r = 1 right r = 0 left
    // let prevDir = 0;
    let i=0;
    let j=0;
    
    let down = true;
    let moveDiagonal = false;
    while (k--) {
        if (i == j == n-1) {
            break;
        }
        else if (arr[i] === undefined || arr[i][j] === undefined ) {
            
        } else {
            console.log(arr[i][j]);
        }
        if( moveDiagonal === false && j == n-1 ){
            // down 
            i += 1;
            moveDiagonal = true;
            down = true;
        } else if( moveDiagonal === false && i === 0){
            // right
            j +=1;
            moveDiagonal = true;
            down = true;
        } else if( moveDiagonal === false && i == n-1){
            // right
            j +=1;
            moveDiagonal = true;
            down = false;
        } else if( moveDiagonal === false && j == 0){
             // down 
             i += 1;
             moveDiagonal = true;
             down = false;
        } else if( moveDiagonal === true && down){
            // down-left diagonal
            i += 1;
            j -=1;
            if( i == 0 || j == 0 || i == (n-1) || j == (n-1) ){
                moveDiagonal = false;
            }
        } else if( moveDiagonal === true && !down){
            // up-right diagonal
            i -= 1;
            j +=1;
            if( i == 0 || j == 0 || i == (n-1) || j == (n-1) ){
                moveDiagonal = false;
            }
        }    
    }
}
next(arr);


// class Solution {
//     public int[] matrixDiagonally(int[][] mat) {
//         int i=0;
//         int j=0;
//         int n = mat.length;
//         int k = 0;
//         int newarr[] = new int[n*n]; 
//         boolean down = true;
//         boolean moveDiagonal = false;
//         while (k < (n*n)) {
//             newarr[k] = mat[i][j];
//             k++;
//             if( moveDiagonal == false && j == n-1 ){
//                 // down 
//                 i += 1;
//                 moveDiagonal = true;
//                 down = true;
//             } else if( moveDiagonal == false && i == 0){
//                 // right
//                 j +=1;
//                 moveDiagonal = true;
//                 down = true;
//             } else if( moveDiagonal == false && i == n-1){
//                 // right
//                 j +=1;
//                 moveDiagonal = true;
//                 down = false;
//             } else if( moveDiagonal == false && j == 0){
//                  // down 
//                  i += 1;
//                  moveDiagonal = true;
//                  down = false;
//             } else if( moveDiagonal == true && down){
//                 // down-left diagonal
//                 i += 1;
//                 j -=1;
//                 if( i == 0 || j == 0 || i == (n-1) || j == (n-1) ){
//                     moveDiagonal = false;
//                 }
//             } else if( moveDiagonal == true && !down){
//                 // up-right diagonal
//                 i -= 1;
//                 j +=1;
//                 if( i == 0 || j == 0 || i == (n-1) || j == (n-1) ){
//                     moveDiagonal = false;
//                 }
//             }    
//         }
//         return newarr;
//     }
// }