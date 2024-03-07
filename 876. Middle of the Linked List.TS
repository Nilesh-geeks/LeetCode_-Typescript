Question :: 876. Middle of the Linked List

Given the head of a singly linked list, return the middle node of the linked list.

If there are two middle nodes, return the second middle node.

 
Solution::

Complexity::

Time complexity : O(N)

Space complexity : O(1)

Code::

/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

function middleNode(head: ListNode | null): ListNode | null {
        let  slow  = head;
        let  fast  = head;
        while(fast && fast?.next){
            fast = fast?.next?.next;
            slow= slow?.next;
        }
        return slow;
};