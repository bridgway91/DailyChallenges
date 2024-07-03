// Linked Lists - Remove Duplicates
// Write a RemoveDuplicates() function which takes a list sorted in increasing order and deletes any duplicate nodes from the list. Ideally, the list should only be traversed once. The head of the resulting list should be returned.

// var list = 1 -> 2 -> 3 -> 3 -> 4 -> 4 -> 5 -> null
// removeDuplicates(list) === 1 -> 2 -> 3 -> 4 -> 5 -> null

// If the passed in list is null/None/nil, simply return null.
// Note: Your solution is expected to work on long lists. Recursive solutions may fail due to stack size limitations.


function Node(data) { // originally had a soln worked out that worked for all simple tests, but timed out for absurdly large lists, so had to re-do... and the re-do required looking at previous solns... so linked lists not getting any easier, ffs
    this.data = data;
    this.next = null;
  }
function removeDuplicates(head) { // apparently can just reassign the head to something else and things done there will still have impact, who knew
    let current = head
    while (current && current.next) {
      if (current.data == current.next.data) {
        current.next = current.next.next
      } else {
        current = current.next
      }
    }
    return head
  }