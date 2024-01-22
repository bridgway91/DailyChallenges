// Implement the function unique_in_order which takes as argument a sequence and returns a list of items without any elements with the same value next to each other and preserving the original order of elements.

// For example:

// uniqueInOrder('AAAABBBCCDAABBB') == ['A', 'B', 'C', 'D', 'A', 'B']
// uniqueInOrder('ABBCcAD')         == ['A', 'B', 'C', 'c', 'A', 'D']
// uniqueInOrder([1,2,2,3,3])       == [1,2,3]

var uniqueInOrder=function(iterable){ // idk why i had trouble wrapping my head around this one.. i kept wanting to check both directions for equivalence, which then found only elements on their own
    let arr = [...iterable]
    let res = []
    arr.forEach((e,i,a) => {
      if ((e != a[i-1])) {
        res.push(e)
      }
    })
    return res
  }


// alternatively...

var uniqueInOrder=function(iterable){ // THIS... THIS IS WHAT I WANTED TO DO, BUT FOR SOME REASON COULDNT WRITE OUT
    return [...iterable].filter((a, i) => a !== iterable[i-1])
}