/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {TreeNode}
 */
var mergeTrees = function(root1, root2) {
    if (!root1 && !root2) 
        return null
    
    var root = new TreeNode(getValue(root1, 'val', 0) + getValue(root2, 'val', 0) )
    root.left = mergeTrees(getValue(root1, 'left'), getValue(root2, 'left'))
    root.right = mergeTrees(getValue(root1, 'right'), getValue(root2, 'right'))
    return root
    
    function getValue(node, key, value = null) {
        return node ? node[key] : value
    }
};