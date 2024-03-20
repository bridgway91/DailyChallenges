// Given a node object representing a binary tree:
// Node:
//   value: <int>,
//   left: <Node> or null,
//   right: <Node> or null
// write a function that returns the sum of all values, including the root. Absence of a node will be indicated with a null value.

// Examples:
// 10
// | \
// 1  2
// => 13
// 1
// | \
// 0  0
//     \
//      2
// => 3


function sumTheTreeValues(root){ // was a bit doubtful at first, after first console logs i felt good enough to get it first try
    let sum = root.value
    sum += root.left ? sumTheTreeValues(root.left) : 0
    sum += root.right ? sumTheTreeValues(root.right) : 0
    return sum
  }


// alternatively...

function sumTheTreeValues(root) { // seems like the common solution method involves recursion, this is only attempt i found that did it in 1 line (sorta)
    return !root ? 0 : root.value + sumTheTreeValues(root.left) + sumTheTreeValues(root.right);
  }