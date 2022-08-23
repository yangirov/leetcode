/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    var map = {
        "]": "[",
        ")": "(",
        "}": "{"
    }
    
    var st = []
    
    for (let i = 0; i < s.length; i++) {
        if (["[", "(", "{"].includes(s[i])) {
            st.push(s[i])
        }
        else {
            const actual = st.pop()
            const expected = map[s[i]]

            if (actual !== expected)
                return false
        }
    }
    
    return st.length === 0
}