// Write a function which partitions a list of items based on a given predicate.
// After the partition function is run, the list should be of the form [ F, F, F, T, T, T ] where the Fs (resp. Ts) are items for which the predicate function returned false (resp. true).

// NOTE: the partitioning should be stable; in other words: the ordering of the Fs (resp. Ts) should be preserved relative to each other.
// For convenience and utility, the partition function should return the boundary index. In other words: the index of the first T value in items.

// For example:
// var items = [1, 2, 3, 4, 5, 6];
// function isEven(n) {return n % 2 == 0}
// var i = partitionOn(isEven, items);
// // items should now be [1, 3, 5, 2, 4, 6]
// // i     should now be 3


// partition the items array so that all values for which pred returns true are
// at the end, returning the index of the first true value
function partitionOn(pred, items) { // pretty simple, my code would've looked a little different, but same approach
  let falses = []
  let trues = []
  for (let item of items) {
    (pred(item) ? trues : falses).push(item)
  }
  items.splice(0, items.length, ...falses, ...trues)
  return falses.length
}