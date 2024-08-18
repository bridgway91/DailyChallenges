// Implement the method map, which accepts a linked list (head) and a mapping function, and returns a new linked list (head) where every element is the result of applying the given mapping method to each element of the original list.
// For example: Given the list: 1 -> 2 -> 3, and the mapping function x => x * 2, map should return 2 -> 4 -> 6

// The linked list is defined as follows:
// function Node(data, next = null) {
//   this.data = data;
//   this.next = next;
// }
// Note: the list may be null and can hold any type of value.

// Good luck!


function map(head, f) { // ok, had to look at solns, but got 90% of the way there with my original soln.. basically was same except instead of creating a new node i was just reassigning the head.data and then running map on the head.next... so bit of an fyi, you can include the recursion as an argument within a return!
    if(head) {
      return new Node(f(head.data),map(head.next,f))
    } else {
      return null
    }
  }