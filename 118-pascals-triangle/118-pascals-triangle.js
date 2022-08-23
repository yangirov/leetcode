/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(num) { 
    return rows([1], num);
    
//     let result = [];
    
//     for (let i=0; i < num; i++)
//     {
//         result[i] = [];
//         result[i][i] = 1
//         result[i][0] = result[i][i];
        
//         for (let j=1; j < i; j++)
//         {
//            result[i][j] = result[i-1][j] + result[i-1][j-1]; 
//         }
//     }
    
//     return result;
};

const rows = (currentRow, rowsCount, result = [[1]]) => {
    if (rowsCount <= 1)
        return result;
    
    if (currentRow.length == rowsCount)
        return currentRow;

    let nextRow = [currentRow[0], currentRow[currentRow.length-1]]

    for (let i=0; i < currentRow.length-1; i++) {
        nextRow.splice(i+1, 0, currentRow[i] + currentRow[i+1])
    }

    result.push(nextRow)
    
    rows(nextRow, rowsCount, result)
    
    return result
}