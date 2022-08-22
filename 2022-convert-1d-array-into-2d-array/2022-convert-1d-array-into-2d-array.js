/**
 * @param {number[]} original
 * @param {number} m
 * @param {number} n
 * @return {number[][]}
 */
var construct2DArray = function(original, m, n) {
    if (original.length != m * n) {
        return [];    
    }
    
    let columns = [...Array(n).keys()];
    let result = [];

    for (let i = 0; i < original.length; i++) {
        result[result.length] = columns.map((x) => original[i+x]);
        i += n-1;
    }
    
    return result;
};