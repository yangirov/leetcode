/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function(sub, word) {
    let pointer = 0
    
    for (let letter of word) {
        if (letter === sub[pointer])
            pointer++
    }
    
    return pointer === sub.length
};