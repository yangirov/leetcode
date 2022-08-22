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
 * @param {TreeNode} subRoot
 * @return {boolean}
 */
var isSubtree = function(root, subRoot) {
    if (root == null && subRoot == null)
        return true
    
    if (root == null || subRoot == null)
        return false
    
    if (root.val == subRoot.val) {
        if (isEqualTree(root.left, subRoot.left) && isEqualTree(root.right, subRoot.right))
            return true
    }
    
    return isSubtree(root.left, subRoot) || isSubtree(root.right, subRoot)
};

function isEqualTree(node1, node2) {
    if (node1 == null && node2 == null)
        return true
    
    if (node1 == null || node2 == null)
        return false
    
    if (node1.val != node2.val)
        return false
    
    return isEqualTree(node1.left, node2.left) && isEqualTree(node1.right, node2.right)
}