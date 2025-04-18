// Definition: According to Wikipedia, a complete binary tree is a binary tree "where every level, except possibly the last, is completely filled, and all nodes in the last level are as far left as possible."
// The Wikipedia page referenced above also mentions that "Binary trees can also be stored in breadth-first order as an implicit data structure in arrays, and if the tree is a complete binary tree, this method wastes no space."
// Your task is to write a method (or function) that takes an array (or list, depending on language) of integers and, assuming that the array is ordered according to an in-order traversal of a complete binary tree, returns an array that contains the values of the tree in breadth-first order.

// Example 1: Let the input array be [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]. This array contains the values of the following complete binary tree.
//           _ 7_
//         /      \
//        4        9
//      /   \     / \
//    2      6   8   10
//   / \     /
//  1   3   5
// In this example, the input array happens to be sorted, but that is not a requirement.
// Output 1: The output of the function shall be an array containing the values of the nodes of the binary tree read top-to-bottom, left-to-right. In this example, the returned array should be:
// [7, 4, 9, 2, 6, 8, 10, 1, 3, 5]

// Example 2: Let the input array be [1, 2, 2, 6, 7, 5]. This array contains the values of the following complete binary tree.
//         6
//       /   \
//     2       5
//    / \     /
//   1   2   7
// Note that an in-order traversal of this tree produces the input array.
// Output 2: The output of the function shall be an array containing the values of the nodes of the binary tree read top-to-bottom, left-to-right. In this example, the returned array should be:
// [6, 2, 5, 1, 2, 7]


function completeBinaryTree(a) {  // not mine, another soln, didnt really understand how to solve problem, CGPT couldnt really help, walked through this soln and kinda understood what it was doing, but still mostly at a loss
    return saveTree(constructTree(a))
}
function constructTree(a) {
    const tree = {
        v: 0,
        l: null,
        r: null,
    }
    if (a.length <= 1) return {
        v: a[0],
    }
    const rowNum = Math.floor(Math.log2(a.length + 1))
    const inLastRowNum = 2 ** rowNum
    const subTreeNum = inLastRowNum - 1
    const extraDigitsNum = a.length - subTreeNum
    let center = (subTreeNum - 1) / 2
    if (extraDigitsNum >= inLastRowNum / 2) {
        center = subTreeNum
    } else if (extraDigitsNum > 0) {
        center += extraDigitsNum
    }
    tree.v = a[center]
    tree.l = constructTree(a.slice(0, center))
    tree.r = constructTree(a.slice(center + 1))
    return tree
}
function saveTree(tree) {  
    const queue = [tree]
    const savedTree = []
    while (queue[0]) {
        const node = queue[0]
        if (node.v !== undefined) savedTree.push(node.v)
        if (node.l) queue.push(node.l)
        if (node.r) queue.push(node.r)
        queue.shift()
    }
    return savedTree
}