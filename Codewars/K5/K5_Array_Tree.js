// You are given an array of integers. Implement a function which creates a complete binary tree from the array (complete meaning that every level of the tree, except possibly the last, is completely filled).
// The elements of the array are to be taken left-to-right, and put into the tree top-to-bottom, left-to-right.

// For example, given the array [17, 0, -4, 3, 15] you should create the following tree:
//     17
//    /  \
//   0   -4
//  / \
// 3   15 

// A tree node type is preloaded for you:
// var TreeNode = function(value, left, right) {
//   this.value = value;
//   this.left = left;
//   this.right = right;
// };


var TreeNode = function(value, left, right) { // not sure if this is needed... 
  this.value = value;
  if (left !== undefined) this.left = left;
  if (right !== undefined) this.right = right;
};
function arrayToTree(arr) { // honestly wasnt sure how to handle this one
  if (arr.length === 0) return undefined;

  const root = new TreeNode(arr[0]);
  const queue = [root];
  let i = 1;

  while (i < arr.length) {
    const current = queue.shift();

    if (i < arr.length) {
      const left = new TreeNode(arr[i++]);
      current.left = left;
      queue.push(left);
    }

    if (i < arr.length) {
      const right = new TreeNode(arr[i++]);
      current.right = right;
      queue.push(right);
    }
  }

  return root;
}


// or...

function arrayToTree(values, i = 0) { // omg this is so smart...
  if (i >= values.length) return;
  return new TreeNode(values[i], arrayToTree(values, 2 * i + 1),
                                 arrayToTree(values, 2 * i + 2));
}