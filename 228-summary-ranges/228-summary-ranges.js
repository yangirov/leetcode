/**
 * @param {number[]} nums
 * @return {string[]}
 */
var summaryRanges = function(nums) {
    const result = []
    
    for (let start=0, end=0; end<nums.length; end++, start=end) {
        while (nums[end] === nums[end+1]-1) {
            end++
        }
        
        if (end > start)
            result.push(`${nums[start]}->${nums[end]}`)
        else 
            result.push(`${nums[end]}`)
    }
    
    return result
};