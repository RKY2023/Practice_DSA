/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var searchNeighbour = (row, col, wordIdx, word, board) => {
    // 4 dir search => call itself word ++ till word end
    if(word.length == (wordIdx)) {
        return true;
    } else if(row+1 < board.length && board[row+1][col] == word[wordIdx]) {
        return searchNeighbour(row+1, col, wordIdx+1, word, board);
    } else if(row-1 >= 0 && board[row-1][col] == word[wordIdx]) {
        return  searchNeighbour(row-1, col, wordIdx+1, word, board);
    } else if(col+1 < board[0].length && board[row][col+1] == word[wordIdx]) {
        return searchNeighbour(row, col+1, wordIdx+1, word, board);
    } else if(col-1 >= 0 && board[row][col-1] == word[wordIdx]) {
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
                if(searchNeighbour(i, j, 1, word, board , '')){
                    return true;
                }
                // st = searchNeighbour(i, j, 1, word, board , '');
            }
        }
    }
    return false;
};