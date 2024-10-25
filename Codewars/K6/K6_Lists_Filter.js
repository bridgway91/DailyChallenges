// Implement the method filter, which accepts a linked list (head) and a predicate function, and returns a new linked list (head) which only contains the elements which apply to the given predicate.
// For example: Given the list: 1 -> 2 -> 3, and the predicate x => x >= 2, filter should return 2 -> 3, since x >= 2 applies to both 2 and 3.
// The linked list is defined as follows:
// function Node(data, next = null) {
//   this.data = data;
//   this.next = next;
// }
// Note: the list may be null.


function filter(head, p) { // took as long just staring and thinking through this as it took to do all of yesterday's problem... but once i got my head worked around it i got it solved first try, yay me
    if(head == null) return null
    if (p(head.data)) { // this whole thing could just be a "return ... ? ... : ..."
      return new Node(head.data, filter(head.next, p))
    } else {
      return filter(head.next, p)
    }
  }