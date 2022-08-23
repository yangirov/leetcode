/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n, memo = {}) {   
    if (n == 1) {
        return true
    }

    if (n in memo) {
        return false
    }

    let result = n.toString().split('')
        .reduce((acc, x) => {
            acc += Math.pow(x, 2)
            return acc
        }, 0)

    memo[n] = result;

    return isHappy(result, memo);
};