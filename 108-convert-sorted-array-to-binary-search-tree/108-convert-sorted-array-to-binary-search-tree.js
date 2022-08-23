/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var sortedArrayToBST = function(nums) {
    if (!nums.length)
        return null
    
    const midpoint = Math.floor(nums.length / 2)
    const node = new TreeNode(nums[midpoint])
    
    node.left = sortedArrayToBST(nums.slice(0, midpoint))
    node.right = sortedArrayToBST(nums.slice(midpoint+1))
    
    return node
};