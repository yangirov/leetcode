/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsetsWithDup = function(nums) {
    const list = [];
    nums.sort((a,b) => a - b);
    backtrack(list, [], nums, 0);
    return list;
};

var backtrack = function(list, tempList, nums, start) {
    list.push([...tempList]);
    
    for (let i = start; i < nums.length; i++) {
        if (i == start || nums[i] !== nums[i - 1]) {
            tempList.push(nums[i]);
            backtrack(list, tempList, nums, i+1);
            tempList.pop();
        }
    }
}