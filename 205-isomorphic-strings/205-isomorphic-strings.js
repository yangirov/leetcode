/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function(s, t) {
    for (let i = 0; i < s.length; i++) {
        if (s.indexOf(s[i]) != t.indexOf(t[i])) {
            return false;
        }
    }
    
    return true;

    // return str(s) === str(t);
};

// const str = (text) => {
//     const letters = text.split("")
//     const obj = map(letters)

//     return letters.reduce((acc, x) => acc += obj[x], 0)
// };

// const map = (arr) => arr
//     .reduce((acc, x, i) => {
//         acc[x] = (acc[x] || 0) + 1
//         return acc
//     }, {})