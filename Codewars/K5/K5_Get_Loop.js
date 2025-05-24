// You are given a node that is the beginning of a linked list. This list contains a dangling piece and a loop. Your objective is to determine the length of the loop.
// For example in the following picture the size of the dangling piece is 3 and the loop size is 12:
// [3-chain of loose nodes connects to node 4, which wraps around and the chain evenetually leads back to node 4, skipping 1/2/3]

// // Use the `getNext' method or 'next' property to get the following node.
// node.getNext()
// node.next

// Notes:
// do NOT mutate the nodes!
// in some cases there may be only a loop, with no dangling piece


function loop_size(node) { // so actually wasn't fully sure how to solve right off the bat, all my initial thoughts would require mutating the nodes, so they were a no-go... this from CGPT, and reinforces the need for me to learn how to use Map()'s effectively, they seem useful (can store objects as keys)
  const seen = new Map();
  let steps = 0;

  while (node) {
    if (seen.has(node)) {
      return steps - seen.get(node); // Loop detected! Length = now - when we first saw it
    }
    seen.set(node, steps); // Save reference and step count
    steps++;
    node = node.next || node.getNext?.(); // Get the next node safely
  }
}