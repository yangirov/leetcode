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
 * @return {number}
 */
var diameterOfBinaryTree = function(root) {   
    if (!root) return 0;

    const center = countDiameter(root.left) + countDiameter(root.right);
    const left = diameterOfBinaryTree(root.left);
    const right = diameterOfBinaryTree(root.right);

    return Math.max(center, left, right);
};

const countDiameter = root => {
  if (!root) return 0;

  return 1 + Math.max(countDiameter(root.left), countDiameter(root.right));
};
