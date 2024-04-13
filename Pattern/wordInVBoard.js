/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word = "ABCZCED";
function searchNeighbour (row, col, wordIdx, word, board, st) {
    // 4 dir search => call itself word ++ till word end
    if(word.length == (wordIdx)) {
        return true;
    } else if(row+1 < board.length && board[row+1][col] == word[wordIdx]) {
        st += (row+1) + (col);
        return searchNeighbour(row+1, col, wordIdx+1, word, board);
    } else if(row-1 >= 0 && board[row-1][col] == word[wordIdx]) {
        st += (row+1) + (col);
        return  searchNeighbour(row-1, col, wordIdx+1, word, board);
    } else if(col+1 < board[0].length && board[row][col+1] == word[wordIdx]) {
        st += (row+1) + (col);
        return searchNeighbour(row, col+1, wordIdx+1, word, board);
    } else if(col-1 >= 0 && board[row][col-1] == word[wordIdx]) {
        st += (row+1) + (col);
        return searchNeighbour(row, col-1, wordIdx+1, word, board);
    } else {        
        return false;
    }
}

var exist = function(board, word) {
    let st;
    for ( let i =0; i < board.length; i++) {
        for( let j = 0; j < board[i].length; j++) {
            if(board[i][j] == word[0]) {
                // run fn
                // if(searchNeighbour(i, j, 1, word, board , '')){
                //     return true;
                // }
                console.log(i,j, word[0]);
                st = searchNeighbour(i, j, 1, word, board , '');
                console.log('aa',st);
                if(st){
                        return true;
                    }
                // break;
            }
        }
    }
    return false;
};
console.log(exist(board, word));

// reverse dir , previous dir must not travel, palindrome word, 