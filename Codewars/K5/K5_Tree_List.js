// Given the root of a tree with an arbitrary number of child nodes, return a list containing the nodes' data in breadth-first order (left to right, top to bottom).
// Child nodes are stored in a list. An empty tree is represented by an empty list.

// Example:
//            1
//           / \
//          2   3  -> [1,2,3,4,5,6,7]
//         /|\   \
//        4 5 6   7


/* preloaded Node definition :
class Node {
  constructor (data, children = []) {
    this.data = data;
    this.children = children;
  }
}
*/
function treeToArray (tree) { // ok, had some trouble with this at first, did a recursive method but that went the wrong way with it (did all way down on left side, then backtracked as needed)
    let arr = [], row = [tree]
    while(row.some(e=>typeof(e)=='object' && !Array.isArray(e))) {
      row.forEach(e=>arr.push(e.data))
      row = row.map(e=>e.children).flat()
    }
    return arr;
  }

// or...

function treeToArray(tree) { // while longer than mine, i really like how this one is laid out, makes it seem clearer what is being done
    if(Array.isArray(tree)) return [];
  
    let queue = [tree];
    let result = [tree.data];
  
    while (queue.length) {
      let node = queue.shift();
  
      if(node.children){
        node.children.forEach(x => queue.push(x));
        node.children.forEach(x => result.push(x.data));
      }
    }
  
    return result;
  }