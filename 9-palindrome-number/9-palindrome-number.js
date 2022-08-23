/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    var result = ''
    var str = x.toString()
    for(i=str.length-1; i>=0; i--) {
        result += str[i]
    }
    
    return str === result
};