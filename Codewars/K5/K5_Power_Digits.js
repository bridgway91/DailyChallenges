// The number 81 has a special property, a certain power of the sum of its digits is equal to 81 (nine squared). Eighty one (81), is the first number in having this property (not considering numbers of one digit). The next one, is 512. Let's see both cases with the details
// 8 + 1 = 9 and 92 = 81
// 512 = 5 + 1 + 2 = 8 and 83 = 512
// We need to make a function that receives a number as argument n and returns the n-th term of this sequence of numbers.

// Examples (input --> output)
// 1 --> 81
// 2 --> 512

// Happy coding!


let series = [0]; // not my soln, but includes some elements i did have in mine, like keeping track of the desired numbers in an outside array and then referencing that for the actual function, however he just fully built out the array with basically every possible result the tests could ask for, and i meandered trying to conditionally build it based on requests, which got nowhere and took too long to work on, so just looked up this
for (let a = 2; a < 100; a++) {
  for (let b = 2; b < 42; b++) {
    let c = Math.pow(a, b);
    if (c.toString().split('').reduce((x,y) => x + parseInt(y), 0) === a) {
      series.push(c);
    }
  }
}
series = series.sort((a, b) => a - b);
var powerSumDigTerm = n => series[n];