/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function(head) {
    var arr = [head.val]
    
    while(head.next !== null){
        head = head.next;
        arr.push(head.val)
    }
    
    var midpoint = arr.length / 2
    
    for (let i=0; i < midpoint; i++) {
        if (arr[i] != arr[arr.length-1-i])
            return false
    }
    
    return true
};