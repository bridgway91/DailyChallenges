// Linked Lists - Insert Nth
// Implement an InsertNth() function (insert_nth() in PHP) which can insert a new node at any index within a list.
// InsertNth() is a more general version of the Push() function that we implemented in the first kata listed below. Given a list, an index 'n' in the range 0..length, and a data element, add a new node to the list so that it has the given index. InsertNth() should return the head of the list.

// insertNth(1 -> 2 -> 3 -> null, 0, 7) === 7 -> 1 -> 2 -> 3 -> null)
// insertNth(1 -> 2 -> 3 -> null, 1, 7) === 1 -> 7 -> 2 -> 3 -> null)
// insertNth(1 -> 2 -> 3 -> null, 3, 7) === 1 -> 2 -> 3 -> 7 -> null)


function Node(data) { // once again linked lists prove difficult to wrap my head around for w/e reason, had to look at solutions... did change up a thing or two still... became clearer once i realized that, because we needed to climb back up the list, our final return should just be the head of the original list... so rather than building up a new list in the middle, i needed to work on reassigning the '.next' values
    this.data = data;
    this.next = null;
  }
function insertNth(head, index, data) {
    if (index == 0) {
      let n = new Node(data)
      n.next = head
      return n
    } else {
      head.next = insertNth(head.next, index-1,data)
    }
    return head
  }
  