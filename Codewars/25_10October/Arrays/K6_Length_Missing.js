// You get an array of arrays.
// If you sort the arrays by their length, you will see, that their length-values are consecutive.
// But one array is missing!

// You have to write a method, that return the length of the missing array.
// Example:
// [[1, 2], [4, 5, 1, 1], [1], [5, 6, 7, 8, 9]] --> 3

// If the array of arrays is null/nil or empty, the method should return 0.
// When an array in the array is null or empty, the method should return 0 too!
// There will always be a missing element and its length will be always between the given arrays.


function getLengthOfMissingArray(arrays) { // not hard, but more work than the other katas ive been doing
  if (!arrays || !arrays.length || arrays.some(a => !a || !a.length)) return 0;
  const lens = arrays.map(a => a.length);
  const min = Math.min(...lens), max = Math.max(...lens);
  const expected = (min + max) * (max - min + 1) / 2;
  return expected - lens.reduce((s, n) => s + n, 0);
}
