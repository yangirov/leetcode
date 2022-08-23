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
 * @return {number[]}
 */
var inorderTraversal = function(root) {
    var result = []    
    visit(root, result)
    return result
};

function visit(node, result) {
    if (node == null)
        return
    
    visit(node.left, result)
    result.push(node.val)
    visit(node.right, result)
}