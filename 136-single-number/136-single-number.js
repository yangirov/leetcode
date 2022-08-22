/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    let map = {}
    
    for (let i of nums) {
        if (!map[i])
            map[i] = 1;
        else 
            map[i] += 1
    }
    
    for (const [k, v] of Object.entries(map)) {
        if (v === 1)
            return k;
    }
};