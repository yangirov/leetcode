/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
    if (x < 4) 
        return x == 0 ? 0 : 1
    
    var res = 2 * mySqrt(x/4)
    
    if ((res+1)*(res+1) <= x && (res+1)*(res+1) >= 0) 
        return res+1;
    
    return res;
}; 