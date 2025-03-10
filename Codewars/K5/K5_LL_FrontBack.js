// Write a FrontBackSplit() function that takes one list and splits it into two sublists — one for the front half, and one for the back half. If the number of elements is odd, the extra element should go in the front list. For example, FrontBackSplit() on the list 2 -> 3 -> 5 -> 7 -> 11 -> null should yield the two lists 2 -> 3 -> 5 -> null and 7 -> 11 -> null. Getting this right for all the cases is harder than it looks. You will probably need special case code to deal with lists of length < 2 cases.

// var source = 1 -> 3 -> 7 -> 8 -> 11 -> 12 -> 14 -> null
// var front = new Node()
// var back = new Node()
// frontBackSplit(source, front, back)
// front === 1 -> 3 -> 7 -> 8 -> null
// back === 11 -> 12 -> 14 -> null

// You should throw an error if any of the arguments to FrontBackSplit are null or if the source list has < 2 nodes.

// Hint. Probably the simplest strategy is to compute the length of the list, then use a for loop to hop over the right number of nodes to find the last node of the front half, and then cut the list at that point. There is a trick technique that uses two pointers to traverse the list. A "slow" pointer advances one nodes at a time, while the "fast" pointer goes two nodes at a time. When the fast pointer reaches the end, the slow pointer will be about half way. For either strategy, care is required to split the list at the right point.


function Node(data) {
    this.data = data === undefined ? null : data;
    this.next = null;
  }
function frontBackSplit(source, front, back) { // NOT CORRECT SOLN -- ok, im not entirely sure why my code wasnt working, i managed to get the length fine, but cutting at the right point seemed messy, and often wouldnt even cut, the rest of the list would still be there for the 'front'... fking LL's are too troublesome, one day im gonna need to focus in on them
    if(source==null || front==null || back==null) { throw new Error } 
    if(source.next == null) { throw new Error }
    
    let length = 0, j=source
    while(j) {length++ ; j=j.next}
    console.log(length)
    let f = front, b = back
    console.log(source)
    for(let i=1; i<=length; i++) {
      if(i<=Math.ceil(length/2)) {
        f.data = source.data
        if(i==Math.ceil(length/2)) {
          f.next = null
        } else {
          f.next = source.next
          f = f.next
        }
      } else {
        b.data = source.data
        b.next = source.next
        b = b.next
      }
      source = source.next
    }
    console.log(front, back)
  }

// or...

function frontBackSplit(source, front, back) {
    let cnt = 0;
    let node = source;
    while (node) {
      cnt++;
      node = node.next;
    }
    let frontLength = Math.ceil(cnt / 2); // simple so far, gets cut-off point for 'front'
    
    node = source; // reassigns node
    for (let i = 0; i < frontLength - 1; i++) { // oooookay, didnt need to rebuild list, couldve just skipped down the line to the break point and separated there, granted i probly wouldve fucked up the assignments done below, but still...
      node = node.next;
    }
    back.data = node.next.data; // builds up 'back' before cutting it off
    back.next = node.next.next;
    node.next = null;
    front.data = source.data;
    front.next = source.next;
  }