/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {   
    var max = Math.max(...nums)
    
    for (var i = 0; i < nums.length; i++) {
        if (nums[i] === target) {
            return i
        }
        else if (nums[i] < target && target <= nums[i]+1) {
            return i+1
        }  
        else if (nums[i] < target && target < nums[i+1]) {
            return i+1
        }
        else if (target > max) {
            return nums.length
        }         
    }

    return 0
};