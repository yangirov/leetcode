/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function(board, word) {
    for (let i=0; i < board.length; i++) {
        for (let j=0; j < board[0].length; j++) {
            if (board[i][j] == word[0] && traverse(board, word, i, j)) {
                return true;
            }
        }
    }
    
    return false
};
    
var traverse = function(board, word, i, j) {
    if (word.length == 0) {
        return true;
    }
    
    if (i < 0 || i >= board.length || 
        j < 0 || j >= board[0].length || 
        board[i][j] != word[0]
    ) {
        return false;    
    }
    
    let match = false;
    let original = board[i][j];
    board[i][j] = "_";    
    
    let subWord = word.substring(1);
    
    match = traverse(board, subWord, i + 1, j) ||
        traverse(board, subWord, i - 1, j) || 
        traverse(board, subWord, i, j - 1) || 
        traverse(board, subWord, i, j + 1);
    
    board[i][j] = original;
    
    return match;
}