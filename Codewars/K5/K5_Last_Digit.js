// Define a function that takes in two non-negative integers a and b and returns the last decimal digit of a^b .Note that a and b may be very large!
// For example, the last decimal digit of 9^7 is 9, since 9^7=4782969. The last decimal digit of (2^200)^(2^300), which has over 10^92 decimal digits, is 6. Also, please take 0^0 to be 1.
// You may assume that the input will always be valid.

// Examples
// lastDigit(4n, 1n)            // returns 4n
// lastDigit(4n, 2n)            // returns 6n
// lastDigit(9n, 7n)            // returns 9n  
// lastDigit(10n,10000000000n)  // returns 0n


function lastDigit(a, b) { // honestly, no way I wouldve gotten this on my own, not my wheelhouse, and in the rare case i'd need to know this i'd just look it up
  a = BigInt(a);
  b = BigInt(b);

  if (a === 0n && b === 0n) return 1n; // special case: 0^0 = 1
  if (b === 0n) return 1n;             // anything^0 = 1
  if (a === 0n) return 0n;             // 0^anything = 0

  const base = Number(a % 10n);       // only last digit of a matters

  // Map of cycles for digits 0–9
  const cycles = {
    0: [0],
    1: [1],
    2: [2, 4, 8, 6],
    3: [3, 9, 7, 1],
    4: [4, 6],
    5: [5],
    6: [6],
    7: [7, 9, 3, 1],
    8: [8, 4, 2, 6],
    9: [9, 1],
  };

  const cycle = cycles[base];
  const len = BigInt(cycle.length);

  let idx = b % len;
  if (idx === 0n) idx = len;

  return BigInt(cycle[Number(idx - 1n)]);
}