// You are given a binary tree, where every node points to a head of an integer linked list. Implement the method flatten which returns a sorted linked list from the values of all the lists, without duplicates.

// For example, given the following tree:
//     17->1
//    /  \
//   3    1
//  /    / \
// 2    16  7->3
// The method should return 1 -> 2 -> 3 -> 7 -> 16 -> 17.

// The classes TreeNode & ListNode are available for you:
// function TreeNode(value, left, right) {
//   this.value = value;
//   this.left = left;
//   this.right = right;
// };
// function ListNode(data, next = null) {
//   this.data = data;
//   this.next = next;
// };


function flatten(root) { // unfortunately pretty much just copy+paste from CGPT, but being more familiar with linked lists, I *probably* couldve solved this one okay, I was just worried at the start cuz it seemed more 'binary tree' focused
    const set = new Set();
    collectValuesFromTree(root, set);
    const sorted = Array.from(set).sort((a, b) => a - b);
    return buildLinkedListFromSortedArray(sorted);
  }
function collectValuesFromTree(node, set) {
    if (!node) return;
    // Traverse the linked list at this node
    let list = node.value;
    while (list) {
      set.add(list.data);
      list = list.next;
    }
    // Recurse left and right
    collectValuesFromTree(node.left, set);
    collectValuesFromTree(node.right, set);
  }
function buildLinkedListFromSortedArray(arr) {
    let dummy = new ListNode(0);
    let curr = dummy;
    for (let value of arr) {
      curr.next = new ListNode(value);
      curr = curr.next;
    }
    return dummy.next;
  }