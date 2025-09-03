// The first three stages of a sequence are shown. (img shows 1x1 block, then adding a block on top and to right, each step adds top and right and builds along diagonal to approximate stairs)
// The blocksize is a by a and a ≥ 1.

// What is the perimeter of the nth shape in the sequence (n ≥ 1) ?


function perimeterSequence(a,n) { // basic math
  return 4*a*n
}