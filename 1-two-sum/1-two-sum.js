/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    var map = {}
    for (let i=0; i < nums.length - 1; i++) {
        map[target - nums[i]] = i;
        if (nums[i+1] in map)
            return [map[nums[i+1]], i+1]
    }
};