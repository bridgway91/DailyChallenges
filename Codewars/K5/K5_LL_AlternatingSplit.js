// Write an AlternatingSplit() function that takes one list and divides up its nodes to make two smaller lists. The sublists should be made from alternating elements in the original list. So if the original list is a -> b -> a -> b -> a -> null then one sublist should be a -> a -> a -> null and the other should be b -> b -> null.

// var list = 1 -> 2 -> 3 -> 4 -> 5 -> null
// alternatingSplit(list).first === 1 -> 3 -> 5 -> null
// alternatingSplit(list).second === 2 -> 4 -> null

// For simplicity, we use a Context object to store and return the state of the two linked lists. A Context object containing the two mutated lists should be returned by AlternatingSplit().

// If the passed in head node is null/None/nil or a single node, throw an error.


class Node { // NOT MY SOLN, but closest to what i was gonna try to do b4 my head started assuming a recursive function would be better, which i failed to think through how to handle... been too long since i did any linked-list stuff, couldnt think how to handle this
    constructor(data) {
      this.data = data;
      this.next = null;
    }
  }
class Context {
    constructor(first, second) {
      if (!first || !second) throw new Error();
      this.first = first;
      this.second = second;
    }
  }
function alternatingSplit(head) {
    let first = new Node(head.data), second = new Node(head.next.data); // sets up start of both new lists
    let i = 0; // tracker to know whether to add to first or second
    const context = new Context(first, second);
    head = head.next.next; // reassigns head to start going back and forth
    while(head) {
      const node = new Node(head.data); // ok, so, isnt 're-wiring' original list, all nodes past the first two are entirely new nodes, just with the same data as original... was also torn on how that should be handled
      if (i % 2 === 0) {first.next = node;first = node;} // 'steps' through relevant nodes, assigning next to be one created and then making that the new focus
      else {second.next = node;second = node;}
      head = head.next; // original list isn't being modified, so can just step through while building new lists
      i++;
    }
    return context;
  }

// or...

function Context(first, second) { // two somewhat recursive solns
    this.first = first;
    this.second = second;
  }
function alternatingSplit(head) {
    if (arguments.length == 0 || head == null || head.next == null) throw new Error('nope')
    return new Context(split(head), split(head.next)) // builds context with needed heads
  }
const split = (head) => {
    if (head == null) return null
    const result = new Node(head.data) // ok, so also creating new nodes then stepping through
    result.next = head.next == null ? null : split(head.next.next) // grabs 'next' node as 2 down
    return result
  }

// or...

function alternatingSplit(head) {
    if (!head || !head.next) throw Error;
    const arr = [head, head.next], c = new Context(...arr); // similar to idea i had, building lists inside an array, then sets up context
    for (let i = 0, j = 1; arr[j]; [i, j] = [j, i]) { // now this loop i dont really understand, yet it was the highest voted solution... 
      arr[i] = arr[i].next = arr[j].next; // first go: arr[0]=arr[0].next=arr[1].next... think its also just skipping through 2 at a time, alternating which list its building, and continuing until an arr[x]==null (somehow leading to both lists ending in null)... notably it also isn't creating new nodes, but somehow finding a way to reassign
    }
    return c;
  }