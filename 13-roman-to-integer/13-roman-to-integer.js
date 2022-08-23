/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    var map = {
        "I": 1,
        "V": 5,
        "X": 10,
        "L": 50,
        "C": 100,
        "D": 500,
        "M": 1000
    }
    
    var result = 0;
    
    for (let i = 0; i < s.length; i++) {
        if (canBePlaced(s, i, "I", ["V", "X"])) 
            result -= 2
            
        if (canBePlaced(s, i, "X", ["L", "C"])) 
            result -= 20
        
        if (canBePlaced(s, i, "C", ["D", "M"])) 
            result -= 200

        result += map[s[i]]
    }
    
    return result
};

function canBePlaced(s, i, symbol, range) {
    if (s[i] == range[0] || s[i] == range[1]) {
        if (i>0 && s[i-1] == symbol) 
            return true;
    }

    return false;
}