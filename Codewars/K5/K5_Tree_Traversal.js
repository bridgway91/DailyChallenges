// Given the root node of a binary tree (but not necessarily a binary search tree,) write three functions that will print the tree in pre-order, in-order, and post-order.

// A Node has the following properties:
// var data; // A number or string.
// Node left; // Undefined if there is no left child.
// Node right; // Undefined if there is no right child.

// Pre-order means that we
// 1.) Visit the root.
// 2.) Traverse the left subtree (left node.)
// 3.) Traverse the right subtree (right node.)
// In-order means that we
// 1.) Traverse the left subtree (left node.)
// 2.) Visit the root.
// 3.) Traverse the right subtree (right node.)
// Post-order means that we
// 1.) Traverse the left subtree (left node.)
// 2.) Traverse the right subtree (right node.)
// 3.) Visit the root.

// Let's say we have three nodes.
// var a = new Node("A");
// var b = new Node("B");
// var c = new Node("C");
// a.left = b;
// a.right = c;
// Then, preOrder(a) should return ["A", "B", C"]
// inOrder(a) should return ["B", "A", "C"]
// postOrder(a) should return ["B", "C", A"]

// What would happen if we did this?
// var d = new Node("D");
// c.left = d;
// preOrder(a) should return ["A", "B", "C", "D"]
// inOrder(a) should return ["B", "A", "D", "C"]
// postOrder(a) should return ["B", "D", "C", "A"]


function preOrder(node, result = []) { // did learn important info: IN TREE TRAVERSAL TYPE RECURSION, SIMPLY ORDERING THE RECURSE CALLS WILL HANDLE THE FINAL ORDERING
  if (!node) return result;
  result.push(node.data);        // Visit
  preOrder(node.left, result);   // Left
  preOrder(node.right, result);  // Right
  return result;
}

function inOrder(node, result = []) {
  if (!node) return result;
  inOrder(node.left, result);    // Left
  result.push(node.data);        // Visit
  inOrder(node.right, result);   // Right
  return result;
}

function postOrder(node, result = []) {
  if (!node) return result;
  postOrder(node.left, result);  // Left
  postOrder(node.right, result); // Right
  result.push(node.data);        // Visit
  return result;
}
