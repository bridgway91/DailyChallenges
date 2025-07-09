// Write a function that returns all of the sublists of a list/array.
// Example: power([1,2,3]);=>[[],[1],[2],[1,2],[3],[1,3],[2,3],[1,2,3]]
// For more details regarding this, see the power set entry in wikipedia.


function power(arr) { // recursive method... admittedly I have a hard time visualizing it
  if (arr.length === 0) return [[]];

  const first = arr[0];
  const rest = power(arr.slice(1));
  const withFirst = rest.map(sub => [first, ...sub]);

  return [...rest, ...withFirst];
}