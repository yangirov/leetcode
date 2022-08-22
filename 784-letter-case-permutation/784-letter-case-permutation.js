/**
 * @param {string} s
 * @return {string[]}
 */
var letterCasePermutation = function(s) {
    let result = [];
    
    dfs(s.toLowerCase(), result, 0, '');
    
    return result;
};

var dfs = function(s, result, i, res) {
    if (i < s.length) {
        dfs(s, result, i+1, res + s[i]);

        if (s[i] >= 'a') {
            dfs(s, result, i+1, res + s[i].toUpperCase());
        } 
    }
    else {
        result.push(res)
    }
}