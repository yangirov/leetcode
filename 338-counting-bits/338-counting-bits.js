/**
 * @param {number} n
 * @return {number[]}
 */
var countBits = function(n) {
    var result = [0]
    
    // n=4 => arr from n+1 => []
    
    for (let i=1; i < n+1; i++) {
      console.log({ i, bit: i.toString(2), a: result[i>>1], b: i&1 })
      result.push(result[i>>1] + (i&1))  
    }
    
    
    
    // 0
    // 1000000000000001.toString(2)
    // 0000000000000001
    
    // 1
    // 10000000000000001
    // 00000000000000001
    
    // 0100000000000001
    // 0000000000000001
    
    return result
};