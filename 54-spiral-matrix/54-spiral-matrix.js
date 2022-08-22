/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(matrix) {
    let result = [];
    
    let startRow = 0;
    let endRow = matrix.length-1;
    
    let startCol = 0;
    let endCol = matrix[0].length-1;
    
    while (startRow <= endRow && startCol <= endCol) {
        // 1 -> 2 -> 3 || 5
        for (let i = startCol; i <= endCol; i++) {
            result.push(matrix[startRow][i])
        }
        startRow++;
        
        // 6 -> 9
        for (let i = startRow; i <= endRow; i++) {
            result.push(matrix[i][endCol]);
        }
        endCol--;
        
        if (startRow > endRow || startCol > endCol) 
            break;
        
        // 8 -> 7
        for (let i = endCol; i >= startCol; i--) {
            result.push(matrix[endRow][i]);
        }
        endRow--;
        
        // 4
        for (let i = endRow; i >= startRow; i--) {
            result.push(matrix[i][startCol]);
        }
        startCol++;
    }
    
    return result;
};