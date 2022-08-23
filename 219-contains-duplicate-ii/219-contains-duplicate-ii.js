/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function(nums, k) {
    const map = {};

    for (const [i, num] of nums.entries()) {
        if (map[num] !== undefined && i - map[num] <= k)
            return true

        map[num] = i
    }

    return false
};