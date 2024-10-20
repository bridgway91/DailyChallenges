// Write an InsertSort() function which rearranges nodes in a linked list so they are sorted in increasing order. You can use the SortedInsert() function that you created in the "Linked Lists - Sorted Insert" kata below. The InsertSort() function takes the head of a linked list as an argument and must return the head of the linked list.

// var list = 4 -> 3 -> 1 -> 2 -> null
// insertSort(list) === 1 -> 2 -> 3 -> 4 -> null

// If the passed in head node is null or a single node, return null or the single node, respectively. You can assume that the head node will always be either null, a single node, or a linked list consisting of multiple nodes.


function Node(data) { // linked lists continue to be an issue... got it solved myself, but was a bit of a headache
    this.data = data;
    this.next = null;
  }
function insertSort(head) {
    let temp = head, vals = []
    while(temp) {
      vals.push(temp.data)
      temp = temp.next
    }
    vals = vals.sort((a,b)=>a-b)
  
    let sorted = vals[0] ? new Node(vals[0]) : null
    let hold = sorted
    for (let i=1; i<vals.length; i++) {
      hold.next = new Node(vals[i])
      hold = hold.next
    }
  
    return sorted
  }


// alternatively...

function Node(data) { // this is probly the intended method, as it uses a function previously defined in the challenge series (all related to linked lists)
    this.data = data;
    this.next = null;
  }
function insertSort(head) {
    if(!head) return null;
    let sorted = new Node(head.data);
    while(head = head.next) sorted = sortedInsert(sorted, head.data);
    return sorted;
  }

// or

class Node { // first i found that doesnt involve outside function, and is somewhat similar to mine, if a good bit cleaner
    constructor(data, next = null) {
      this.data = data;
      this.next = next;
    }
  }
function insertSort(head) {
    const allData = [];
    while (head) {
      allData.push(head.data);
      head = head.next;
    }
    return allData.sort((a, b) => b - a).reduce(
      (root, data) => new Node(data, root)
    , null);
  }