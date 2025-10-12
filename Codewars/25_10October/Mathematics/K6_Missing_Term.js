// An Arithmetic Progression is defined as one in which there is a constant difference between the consecutive terms of a given series of numbers. You are provided with consecutive elements of an Arithmetic Progression. There is however one hitch: exactly one term from the original series is missing from the set of numbers which have been given to you. The rest of the given series is the same as the original AP. Find the missing term.

// You have to write a function that receives a list, list size will always be at least 3 numbers. The missing term will never be the first or last one.

// Example
// findMissing([1, 3, 5, 9, 11]) == 7


function findMissing(list) { // helps having it all in order from the start :)
  const diff = (list[list.length-1] - list[0]) / list.length
  for (let i=0; i<list.length; i++) {
    let expected = list[0] + i*diff
    if(list[i] != expected) return expected
  }
  return null
}