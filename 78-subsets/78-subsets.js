/**
 * @param {number[]} nums
 * @return {number[][]}
 */

// [1, 2, 3]
// ==>
// []
// [1], [2], [3]
// [1,2], [1,3], [2,3]
// [1,2,3]

var subsets = function(nums) {
    const list = [];
    backtrack(list, [], nums, 0);
    return list;
};

var backtrack = function(list, tempList, nums, start) {
    list.push([...tempList]);
    
    for (let i = start; i < nums.length; i++) {
        tempList.push(nums[i]);
        backtrack(list, tempList, nums, i+1);
        tempList.pop();
    }
}