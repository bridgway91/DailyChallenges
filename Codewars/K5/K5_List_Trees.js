// You are given a linked list (head), where every element points to the root of an integer binary tree. Implement the method flatten which returns a binary tree from the values of all the trees, without duplicates, sorted by levels (while creating nodes by depth, from left to right).

// For example, given the following list:
// 1 -> 4 -> 3 -> 6
//  \       / \    \
//   2     4   2    5
// The method should return the following tree:
//           1
//        /     \
//       2       3
//      / \     /
//     4   5   6   
// (since after removing duplicates & sorting we get the following elements: 1,2,3,4,5,6 and then fill up the tree by depth from left to right)

// The classes ListNode & TreeNode are available for you:
// function ListNode(data, next = null) {
//   this.data = data;
//   this.next = next;
// };
// function TreeNode(value, left, right) {
//   this.value = value;
//   this.left = left;
//   this.right = right;
// };


function flatten(head) { // probably couldve figured out myself, but wouldve taken a bit, this soln from cgpt
    if (!head) return null;
  
    const values = new Set();
  
    // Helper function: BFS traversal to collect all values from a binary tree
    function collectValuesFromTree(root) {
      if (!root) return;
      const queue = [root];
      while (queue.length) {
        const node = queue.shift();
        values.add(node.value); // Add value to set (ensures uniqueness)
        if (node.left) queue.push(node.left);
        if (node.right) queue.push(node.right);
      }
    }
  
    // Step 1: Traverse the linked list and collect values from each tree
    let current = head;
    while (current) {
      collectValuesFromTree(current.data);
      current = current.next;
    }
  
    // Step 2: Convert set to sorted array (ascending)
    const sorted = [...values].sort((a, b) => a - b);
    if (sorted.length === 0) return null;
  
    // Step 3: Build a binary tree from sorted values, level by level
    const root = new TreeNode(sorted.shift());
    const queue = [root];
  
    while (sorted.length) {
      const node = queue.shift();
  
      const leftVal = sorted.shift();
      if (leftVal !== undefined) {
        node.left = new TreeNode(leftVal);
        queue.push(node.left);
      }
  
      const rightVal = sorted.shift();
      if (rightVal !== undefined) {
        node.right = new TreeNode(rightVal);
        queue.push(node.right);
      }
    }
  
    return root;
  }
  