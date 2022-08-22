/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function(nums) {
    //return nums.map(x => Math.pow(x, 2)).sort((a, b) => a - b)
    
    const result = []

    let left = 0
    let right = nums.length - 1   
    let i = right
    
    while (left <= right) {
        let leftPow = Math.pow(nums[left], 2)
        let rightPow = Math.pow(nums[right], 2)
        
        if (leftPow > rightPow) {
            result[i--] = leftPow
            left++
        } else {
            result[i--] = rightPow
            right--
        }
    }
    
    return result
};