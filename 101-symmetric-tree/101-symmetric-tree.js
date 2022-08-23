/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isSymmetric = function(root) {
    if (!root) 
        return true
    
    return visit(root.left, root.right)
};

var visit = function (left, right) {
    if (!left && !right) 
        return true
    
    if (!left || !right || right.val !== left.val) 
        return false
    
    return visit(left.left, right.right) && visit(left.right, right.left)
};